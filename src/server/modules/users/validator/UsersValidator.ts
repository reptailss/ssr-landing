import {
    ObjectSchemaValidator,
    PaginationQueryParams,
    PaginationQueryParamsValidator,
    SchemaValidator,
    Validator,
} from 'os-core-ts'
import { CreateUserDto, UpdateUserDto, UserDto } from '@common/dto/userDto'

export class UsersValidator {
    constructor() {
    }
    
    public getCreateUserDtoSchema(): ObjectSchemaValidator<CreateUserDto> {
        return Validator.object({
            family_name: Validator.string().max(255),
            given_name: Validator.string().max(255),
            email: Validator.string().max(255),
        })
    }
    
    public getUserDtoSchema(): SchemaValidator<UserDto> {
        return this.getCreateUserDtoSchema().merge(
            Validator.object({
                date_add: Validator.date(),
                date_update: Validator.date(),
                id: Validator.number(),
                open_user_id: Validator.number(),
            }),
        )
    }
    
    public getUserDtoPaginationQueryParamsSchema(): SchemaValidator<
        PaginationQueryParams<UserDto>
    > {
        return PaginationQueryParamsValidator.getSchema(this.getUserDtoSchema())
    }
}
