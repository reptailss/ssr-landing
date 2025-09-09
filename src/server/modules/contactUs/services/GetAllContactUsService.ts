import {PaginationQueryParams, PaginationValues} from 'os-core-ts'
import {contactUsModel, ContactUsModel} from '@modules/contactUs/model'
import {ContactUsDto} from '@common/dto/contactUsDto'

export class GetAllContactUsService {
    constructor(private readonly model: ContactUsModel = contactUsModel) {}

    public async getContactUsPagination(
        params: PaginationQueryParams<ContactUsDto>,
    ): Promise<PaginationValues<ContactUsDto>> {
        return this.model.pagination(params)
    }
}
