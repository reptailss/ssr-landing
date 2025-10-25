import { ContactUsStatus, CreateContactUsDto } from '@common/dto/contactUsDto'
import { CreateEntity } from 'os-core-ts'
import { ContactUsEntity } from '@modules/contactUs/repository/entity'

export class ContactUsEntityMapper {
    public static createDtoToEntity(
        createDto: CreateContactUsDto,
        status: ContactUsStatus
    ): CreateEntity<ContactUsEntity> {
        return {
            form_name: createDto.form_name,
            email: createDto.email,
            status,
            text: createDto.text,
        }
    }
}