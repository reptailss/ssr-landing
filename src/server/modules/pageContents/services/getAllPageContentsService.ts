import { AppLocaleValue } from '@common/locales'
import { PageContentsRepository } from '@modules/pageContents/repository'
import { Injectable } from 'os-core-ts'

@Injectable()
export class GetAllPageContentsService {
    
    constructor(
        private readonly repository: PageContentsRepository,
    ) {
    }
    
    public async getSimpleContentsByPage(page: string, locale?: AppLocaleValue | null): Promise<{
        key: string
        value: object
    }[]> {
        return this.repository.findAllSimple({
            page,
            ...(locale ? { locale } : {}),
        })
    }
}