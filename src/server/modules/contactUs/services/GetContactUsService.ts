import {contactUsModel, ContactUsModel} from '@modules/contactUs/model'
import {ContactUsDto} from '@common/dto/contactUsDto'

export class GetContactUsService {
    constructor(private readonly model: ContactUsModel = contactUsModel) {}

    public async getContactUsById(id: number): Promise<ContactUsDto | null> {
        return this.model.findByPk(id)
    }
}
