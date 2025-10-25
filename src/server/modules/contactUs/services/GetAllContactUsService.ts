import { Injectable, PaginationQueryParams, PaginationValues } from 'os-core-ts'
import { ContactUsDto } from '@common/dto/contactUsDto'
import { ContactUsRepository } from '@modules/contactUs/repository'

@Injectable()
export class GetAllContactUsService {
    constructor(
        private readonly repository: ContactUsRepository,
    ) {
    }
    
    public async getContactUsPagination(
        params: PaginationQueryParams<ContactUsDto>,
    ): Promise<PaginationValues<ContactUsDto>> {
        return this.repository.pagination(params)
    }
}
