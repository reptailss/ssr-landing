import { AppLocaleValue } from '@common/locales'
import { Injectable } from 'os-core-ts'
import { SharedContentsRepository } from '@modules/sharedContents/repository'

@Injectable()
export class GetAllSharedContentsService {
    
    constructor(
        private readonly repository: SharedContentsRepository,
    ) {
    }
    
    public async getSimpleSharedContents(locale?: AppLocaleValue | null): Promise<{
        key: string
        value: object
    }[]> {
        return this.repository.findAllSimple({
            ...(locale ? { locale } : {}),
        })
    }
}