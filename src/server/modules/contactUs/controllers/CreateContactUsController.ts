import {
    Body,
    BuildResponseFormat,
    Controller,
    MutateRowResult,
    Post,
    SchemaValidator,
    SwaggerInfo,
    Validator,
} from 'os-core-ts'
import { ContactUsValidator } from '@modules/contactUs/validator/ContactUsValidator'
import { CreateContactUsService } from '@modules/contactUs/services/CreateContactUsService'
import { CreateContactUsDto } from '@common/dto/contactUsDto'
import { CONTACT_US_ROUTE_PATHS } from '@common/apiRoutePaths/contactUsRoutePaths'


type CreateContactUsBody = CreateContactUsDto & {
    recipient_emails: string[]
}

const contactUsValidator = new ContactUsValidator()

const createContactUsBodySchema: SchemaValidator<CreateContactUsBody> = contactUsValidator
    .getCreateContactUsDtoSchema()
    .merge(Validator.object({
        recipient_emails: Validator.array(Validator.string().email()),
    }))

@Controller()
export class CreateContactUsController {
    constructor(
        private readonly createContactUsService: CreateContactUsService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Add new contactus' })
    @Post(CONTACT_US_ROUTE_PATHS.add)
    public async createContactUs(
        @Body(createContactUsBodySchema) body: CreateContactUsBody,
    ): Promise<MutateRowResult<number>> {
        const {
            recipient_emails,
            ...createDto
        } = body
        
        const newDto = await this.createContactUsService.createContactUs({
            initiatorOpenUserId: 0,
            createDto: createDto,
            recipientEmails: recipient_emails,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
