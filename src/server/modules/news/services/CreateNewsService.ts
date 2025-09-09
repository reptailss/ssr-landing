import { ActionsLoggerService, AppError, SlugHelper } from 'os-core-ts'
import { newsModel, NewsModel } from '@modules/news/model'
import { CreateMultilanguageNewsDto } from '@common/dto/newsDto'
import { NewsMapper } from '@modules/news/mapper/NewsMapper'
import { AppLocale, DEFAULT_APP_LOCALE } from '@common/locales'

export class CreateNewsService {
    
    private readonly newsMapper = new NewsMapper()
    
    constructor(
        private readonly model: NewsModel = newsModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async createMultilanguageNews({
                                             initiatorOpenUserId,
                                             createMultilanguageDto,
                                         }: {
        initiatorOpenUserId: number
        createMultilanguageDto: CreateMultilanguageNewsDto
    }): Promise<number[]> {
        const ids: number[] = []
        const defaultLocaleField = createMultilanguageDto.multilanguage_field[DEFAULT_APP_LOCALE]
        
        if (!defaultLocaleField) {
            throw new AppError('Not found default local multilanguage fields', {
                errorKey: 'VALIDATION_ERROR',
            })
        }
        
        const oldDtoByUniqColumn = await this.model.findOne({
            filters: {
                title: defaultLocaleField.title,
                locale: DEFAULT_APP_LOCALE,
            },
        })
        
        if (oldDtoByUniqColumn) {
            throw new AppError('Already exists', {
                errorKey: 'ALREADY_EXISTS_ERROR',
            })
        }
        
        const slug = SlugHelper.generateSlug(defaultLocaleField.title)
        for (const locale in createMultilanguageDto.multilanguage_field) {
            const multilanguageField = createMultilanguageDto.multilanguage_field[locale]
            
            const newDto = await this.model.create(this.newsMapper.createNewsDtoToEntity({
                createDto: {
                    image: createMultilanguageDto.base_field.image,
                    locale: locale as AppLocale,
                    title: multilanguageField.title,
                    content: multilanguageField.content,
                },
                dateAdd: createMultilanguageDto.base_field.date_add,
                slug,
            }))
            await this.actionsLoggerService.logCreateAction({
                value: newDto,
                openUserId: initiatorOpenUserId,
                config: this.model.getConfig(),
                rowId: newDto.id,
            })
            ids.push(newDto.id)
        }
        return ids
    }
}
