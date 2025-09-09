import { ContactUsStatus, CreateContactUsDto } from '@common/dto/contactUsDto'

export type CreateContactUsEntity  = CreateContactUsDto & {
    status: ContactUsStatus
}