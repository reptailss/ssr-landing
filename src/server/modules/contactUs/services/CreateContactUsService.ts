import { ActionsLoggerService } from 'os-core-ts'
import { contactUsModel, ContactUsModel } from '@modules/contactUs/model'
import { ContactUsDto, CreateContactUsDto } from '@common/dto/contactUsDto'
import { ContactUsMapper } from '@modules/contactUs/mapper/ContactUsMapper'
import { ContactUsMailer } from '@modules/contactUs/services/ContactUsMailer'

export class CreateContactUsService {
    private readonly contactUsMapper = new ContactUsMapper()
    
    constructor(
        private readonly model: ContactUsModel = contactUsModel,
        private readonly contactUsMailer: ContactUsMailer = new ContactUsMailer(),
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async createContactUs({
                                     initiatorOpenUserId,
                                     createDto,
                                     recipientEmails,
                                 }: {
        initiatorOpenUserId: number
        createDto: CreateContactUsDto
        recipientEmails: string[]
    }): Promise<ContactUsDto> {
        
        const newDto = await this.model.create(this.contactUsMapper.createContactUsDtoToEntity({
            createDto,
            status: 'pending',
        }))
        
        await this.actionsLoggerService.logCreateAction({
            value: newDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: newDto.id,
        })
        
        await this.contactUsMailer.sendEmails({
            recipientEmails,
            formName: createDto.form_name,
            userEmail: createDto.email,
            text: createDto.text,
        })
        
        return newDto
    }
    
    
}
