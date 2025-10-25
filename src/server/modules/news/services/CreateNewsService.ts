import { ActionsLoggerService, AppError, Injectable, SlugHelper } from 'os-core-ts'
import { CreateMultilanguageNewsDto } from '@common/dto/newsDto'
import { AppLocaleValue, DEFAULT_APP_LOCALE_VALUE } from '@common/locales'
import { NewsRepository } from '@modules/news/repository'

@Injectable()
export class CreateNewsService {
    
    constructor(
        private readonly repository: NewsRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
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
        const defaultLocaleField = createMultilanguageDto.multilanguage_field[DEFAULT_APP_LOCALE_VALUE]
        
        if (!defaultLocaleField) {
            throw new AppError('Not found default local multilanguage fields', {
                errorKey: 'VALIDATION_ERROR',
            })
        }
        
        const oldDtoByUniqColumn = await this.repository.findOne({
            title: defaultLocaleField.title,
            locale: DEFAULT_APP_LOCALE_VALUE,
        })
        
        if (oldDtoByUniqColumn) {
            throw new AppError('Already exists', {
                errorKey: 'ALREADY_EXISTS_ERROR',
            })
        }
        
        const slug = SlugHelper.generateSlug(defaultLocaleField.title)
        for (const locale in createMultilanguageDto.multilanguage_field) {
            const multilanguageField = createMultilanguageDto.multilanguage_field[locale]
            
            const newDto = await this.repository.create({
                createDto: {
                    image: createMultilanguageDto.base_field.image,
                    locale: locale as AppLocaleValue,
                    title: multilanguageField.title,
                    content: multilanguageField.content,
                },
                dateAdd: createMultilanguageDto.base_field.date_add,
                slug,
            })
            await this.actionsLoggerService.logCreateAction({
                value: newDto,
                openUserId: initiatorOpenUserId,
                config: this.repository.getConfig(),
                rowId: newDto.id,
            })
            ids.push(newDto.id)
        }
        return ids
    }
}
