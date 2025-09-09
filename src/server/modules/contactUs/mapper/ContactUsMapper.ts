import { ContactUsStatus, CreateContactUsDto } from '@common/dto/contactUsDto'
import { CreateContactUsEntity } from '@modules/contactUs/model/entity'

export class ContactUsMapper {
    public createContactUsDtoToEntity({
                                          createDto,
                                          status,
                                      }: {
        createDto: CreateContactUsDto,
        status: ContactUsStatus
    }): CreateContactUsEntity {
        return {
            form_name: createDto.form_name,
            email: createDto.email,
            status,
            text: createDto.text,
        }
    }
}