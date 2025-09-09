import { ObjectSchemaValidator, SchemaValidator, Validator } from 'os-core-ts'
import { CreatePageContentDto } from '@common/dto/pageContentDto'
import { AppLocale } from '@common/locales'

export class PageContentsValidator {
    constructor() {
    }
    
    public getCreatePageContentDtoSchema(): ObjectSchemaValidator<CreatePageContentDto> {
        return Validator.object({
            key: Validator.string().max(255),
            value: Validator.union([Validator.record(Validator.unknown()), Validator.array(Validator.unknown())]),
            page: Validator.string().max(255),
            locale: Validator.string().max(255) as SchemaValidator<AppLocale>,
        })
    }
    
}
