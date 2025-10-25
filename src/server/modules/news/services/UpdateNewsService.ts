import { ActionsLoggerService, AppError, Injectable, SlugHelper } from 'os-core-ts'
import { NewsDto, UpdateMultilanguageNewsDto, UpdateNewsDto } from '@common/dto/newsDto'
import { AppLocaleValue, DEFAULT_APP_LOCALE_VALUE } from '@common/locales'
import { NewsRepository } from '@modules/news/repository'

@Injectable()
export class UpdateNewsService {
    
    
    constructor(
        private readonly repository: NewsRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
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
        const oldDto = await this.repository.findByPk(id)
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
            const oldDtoBySlug = await this.repository.findOne({
                slug: targetSlug,
                locale: updateDto.locale || oldDto.locale,
            })
            
            if (oldDtoBySlug) {
                throw new AppError('Already exists', {
                    errorKey: 'ALREADY_EXISTS_ERROR',
                })
            }
        }
        
        const newDto = await this.repository.update({
            slug: targetSlug,
            updateDto,
            where: { id },
        })
        
        await this.actionsLoggerService.logUpdateAction({
            oldValue: oldDto,
            newValue: newDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
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
        
        const defaultLocaleField = updateMultilanguageDto.multilanguage_field[DEFAULT_APP_LOCALE_VALUE]
        
        if (!defaultLocaleField) {
            throw new AppError('Not found default local multilanguage fields', {
                errorKey: 'VALIDATION_ERROR',
            })
        }
        const oldNewsList = await this.repository.findAll({
            where: {
                slug,
            },
        })
        
        const oldNewsDtoDefaultLocal = oldNewsList.find((news) => news.locale === DEFAULT_APP_LOCALE_VALUE)
        
        const targetSlug = oldNewsDtoDefaultLocal && oldNewsDtoDefaultLocal.title === defaultLocaleField.title ? slug : SlugHelper.generateSlug(defaultLocaleField.title)
        
        if (
            typeof oldNewsDtoDefaultLocal?.title !== 'undefined' && oldNewsDtoDefaultLocal.title !== defaultLocaleField.title
        ) {
            const oldDtoBySlug = await this.repository.findOne({
                slug: targetSlug,
                locale: DEFAULT_APP_LOCALE_VALUE,
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
            const newDto = await this.repository.update({
                slug: targetSlug,
                updateDto: {
                    image: updateMultilanguageDto.base_field.image,
                    locale: locale as AppLocaleValue,
                    title: multilanguageField.title,
                    content: multilanguageField.content,
                },
                where: { id: oldDto.id },
            })
            await this.actionsLoggerService.logUpdateAction({
                oldValue: oldDto,
                newValue: newDto,
                openUserId: initiatorOpenUserId,
                config: this.repository.getConfig(),
                rowId: oldDto.id,
            })
            
            ids.push(newDto.id)
        }
        return ids
    }
}
