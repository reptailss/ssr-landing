import {
    ObjectSchemaValidator,
    PaginationQueryParams,
    PaginationQueryParamsValidator,
    SchemaValidator,
    Validator,
} from 'os-core-ts'
import { ContactUsDto, ContactUsStatus, CreateContactUsDto, UpdateContactUsDto } from '@common/dto/contactUsDto'

export class ContactUsValidator {
    constructor() {
    }
    
    public getCreateContactUsDtoSchema(): ObjectSchemaValidator<CreateContactUsDto> {
        return Validator.object({
            email: Validator.string().max(255),
            text: Validator.string().max(255),
            form_name: Validator.string().max(255),
        })
    }
    
    public getUpdateContactUsDtoSchema(): SchemaValidator<UpdateContactUsDto> {
        return Validator.object({
            status: this.getContactUsStatusSchema(),
        })
    }
    
    public getContactUsStatusSchema(): SchemaValidator<ContactUsStatus> {
        return Validator.enum(['pending', 'in_progress', 'resolved', 'closed'] as const)
    }
    
    public getContactUsDtoSchema(): SchemaValidator<ContactUsDto> {
        return this.getCreateContactUsDtoSchema().merge(
            Validator.object({
                date_add: Validator.date(),
                date_update: Validator.date(),
                id: Validator.number(),
                status: this.getContactUsStatusSchema(),
            }),
        )
    }
    
    public getContactUsDtoPaginationQueryParamsSchema(): SchemaValidator<
        PaginationQueryParams<ContactUsDto>
    > {
        return PaginationQueryParamsValidator.getSchema(this.getContactUsDtoSchema())
    }
}
