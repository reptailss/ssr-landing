import { ActionsLoggerService, Injectable } from 'os-core-ts'
import { ContactUsDto, CreateContactUsDto } from '@common/dto/contactUsDto'
import { ContactUsMailer } from '@modules/contactUs/services/ContactUsMailer'
import { ContactUsRepository } from '@modules/contactUs/repository'

@Injectable()
export class CreateContactUsService {
    
    constructor(
        private readonly repository: ContactUsRepository,
        private readonly contactUsMailer: ContactUsMailer,
        private readonly actionsLoggerService: ActionsLoggerService,
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
        
        const newDto = await this.repository.create(
            createDto,
            'pending',
        )
        
        await this.actionsLoggerService.logCreateAction({
            value: newDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
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
