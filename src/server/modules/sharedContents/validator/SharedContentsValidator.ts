import { ObjectSchemaValidator, SchemaValidator, Validator } from 'os-core-ts'
import { CreateSharedContentDto } from '@common/dto/sharedContentDto'
import { AppLocale } from '@common/locales'

export class SharedContentsValidator {
    constructor() {
    }
    
    public getCreateSharedContentDtoSchema(): ObjectSchemaValidator<CreateSharedContentDto> {
        return Validator.object({
            key: Validator.string().max(255),
            value: Validator.union([Validator.record(Validator.unknown()), Validator.array(Validator.unknown())]),
            locale: Validator.string().max(255) as SchemaValidator<AppLocale>,
        })
    }
}
