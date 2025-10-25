import {
    ObjectSchemaValidator,
    PaginationQueryParams,
    PaginationQueryParamsValidator,
    SchemaValidator,
    Validator,
} from 'os-core-ts'
import { CreateAppUserDto, UpdateAppUserDto, AppUserDto } from '@common/dto/userDto'

export class UsersValidator {
    constructor() {
    }
    
    public getCreateAppUserDtoSchema(): ObjectSchemaValidator<CreateAppUserDto> {
        return Validator.object({
            family_name: Validator.string().max(255),
            given_name: Validator.string().max(255),
            email: Validator.string().max(255),
        })
    }
    
    public getAppUserDtoSchema(): SchemaValidator<AppUserDto> {
        return this.getCreateAppUserDtoSchema().merge(
            Validator.object({
                date_add: Validator.date(),
                date_update: Validator.date(),
                id: Validator.number(),
                open_user_id: Validator.number(),
            }),
        )
    }
    
    public getAppUserDtoPaginationQueryParamsSchema(): SchemaValidator<
        PaginationQueryParams<AppUserDto>
    > {
        return PaginationQueryParamsValidator.getSchema(this.getAppUserDtoSchema())
    }
}
