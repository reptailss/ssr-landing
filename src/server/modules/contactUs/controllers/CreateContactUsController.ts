import {
    BodyDec,
    BuildResponseFormat,
    ControllerDec,
    MutateRowResult,
    PostDec,
    SchemaValidator,
    SwaggerInfoDec,
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

@ControllerDec()
export class CreateContactUsController {
    constructor(
        private readonly createContactUsService: CreateContactUsService = new CreateContactUsService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Add new contactus' })
    @PostDec(CONTACT_US_ROUTE_PATHS.add)
    public async createContactUs(
        @BodyDec(createContactUsBodySchema) body: CreateContactUsBody,
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
