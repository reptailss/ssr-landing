import { ContactUsDto } from '@common/dto/contactUsDto'
import { Injectable } from 'os-core-ts'
import { ContactUsRepository } from '@modules/contactUs/repository'

@Injectable()
export class GetContactUsService {
    constructor(
        private readonly repository: ContactUsRepository,
    ) {
    }
    
    public async getContactUsById(id: number): Promise<ContactUsDto | null> {
        return this.repository.findByPk(id)
    }
}
