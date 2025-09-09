import { ObjectSchemaValidator, Validator } from 'os-core-ts'
import { CreateUserAccessDto } from '@common/dto/userAccessDto'

export class UserAccessValidator {
    constructor() {
    }
    
    public getCreateUserAccessDtoSchema(): ObjectSchemaValidator<CreateUserAccessDto> {
        return Validator.object({
            open_user_id: Validator.number(),
            roles: Validator.array(Validator.string()),
        })
    }
    
}
