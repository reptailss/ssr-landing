import { ActionsLoggerService, AppError, SlugHelper } from 'os-core-ts'
import { newsModel, NewsModel } from '@modules/news/model'
import { NewsDto, UpdateMultilanguageNewsDto, UpdateNewsDto } from '@common/dto/newsDto'
import { NewsMapper } from '@modules/news/mapper/NewsMapper'
import { AppLocale, DEFAULT_APP_LOCALE } from '@common/locales'

export class UpdateNewsService {
    
    private newsMapper = new NewsMapper()
    
    constructor(
        private readonly model: NewsModel = newsModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async updateNews({
                                initiatorOpenUserId,
                                updateDto,
                                id,
                                slug,
                            }: {
        initiatorOpenUserId: number
        updateDto: UpdateNewsDto
        id: number
        slug?: string
    }): Promise<NewsDto> {
        const oldDto = await this.model.findByPk(id)
        if (!oldDto) {
            throw new AppError('Not found.', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        const targetSlug = typeof slug !== 'undefined' ? slug : typeof updateDto.title !== 'undefined' ? SlugHelper.generateSlug(updateDto.title) : oldDto.slug
        
        if (
            (typeof updateDto.title !== 'undefined' && updateDto.title !== oldDto.title) ||
            (typeof updateDto.locale !== 'undefined' && updateDto.locale !== oldDto.locale)
        ) {
            const oldDtoBySlug = await this.model.findOne({
                filters: {
                    slug: targetSlug,
                    locale: updateDto.locale || oldDto.locale,
                },
            })
            
            if (oldDtoBySlug) {
                throw new AppError('Already exists', {
                    errorKey: 'ALREADY_EXISTS_ERROR',
                })
            }
        }
        
        const newDto = await this.model.update(this.newsMapper.updateNewsDtoToEntity({
            slug: targetSlug,
            updateDto,
        }), {
            filters: { id: id },
            returning: true,
        })
        await this.actionsLoggerService.logUpdateAction({
            oldValue: oldDto,
            newValue: newDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: id,
        })
        
        return newDto
    }
    
    public async updateMultilanguageNews({
                                             initiatorOpenUserId,
                                             updateMultilanguageDto,
                                             slug,
                                         }: {
        initiatorOpenUserId: number
        updateMultilanguageDto: UpdateMultilanguageNewsDto
        slug: string
    }): Promise<number[]> {
     
        const defaultLocaleField = updateMultilanguageDto.multilanguage_field[DEFAULT_APP_LOCALE]
        
        if (!defaultLocaleField) {
            throw new AppError('Not found default local multilanguage fields', {
                errorKey: 'VALIDATION_ERROR',
            })
        }
        const oldNewsList = await this.model.findAll({
            filters: {
                slug,
            },
        })
        
        const oldNewsDtoDefaultLocal = oldNewsList.find((news) => news.locale === DEFAULT_APP_LOCALE)
        
        const targetSlug = oldNewsDtoDefaultLocal && oldNewsDtoDefaultLocal.title === defaultLocaleField.title ? slug : SlugHelper.generateSlug(defaultLocaleField.title)
        
        if (
            typeof oldNewsDtoDefaultLocal?.title !== 'undefined' && oldNewsDtoDefaultLocal.title !== defaultLocaleField.title
        ) {
            const oldDtoBySlug = await this.model.findOne({
                filters: {
                    slug: targetSlug,
                    locale: DEFAULT_APP_LOCALE,
                },
            })
            
            if (oldDtoBySlug) {
                throw new AppError('Already exists', {
                    errorKey: 'ALREADY_EXISTS_ERROR',
                })
            }
        }
        
        const ids: number[] = []
        
        for (const locale in updateMultilanguageDto.multilanguage_field) {
            const multilanguageField = updateMultilanguageDto.multilanguage_field[locale]
            const oldDto = oldNewsList.find((news) => news.locale === locale)
            if (!oldDto) {
                throw new AppError('Not found.', {
                    errorKey: 'NOT_FOUND_ERROR',
                })
            }
            const newDto = await this.model.update(this.newsMapper.updateNewsDtoToEntity({
                slug: targetSlug,
                updateDto: {
                    image: updateMultilanguageDto.base_field.image,
                    locale: locale as AppLocale,
                    title: multilanguageField.title,
                    content: multilanguageField.content,
                },
            }), {
                filters: { id: oldDto.id },
                returning: true,
            })
            await this.actionsLoggerService.logUpdateAction({
                oldValue: oldDto,
                newValue: newDto,
                openUserId: initiatorOpenUserId,
                config: this.model.getConfig(),
                rowId: oldDto.id,
            })
            
            ids.push(newDto.id)
        }
        return ids
    }
}
