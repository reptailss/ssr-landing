import { PageContentDto } from '@common/dto/pageContentDto'
import { AppLocaleValue } from '@common/locales'
import { PageContentsRepository } from '@modules/pageContents/repository'
import { Injectable } from 'os-core-ts'

@Injectable()
export class GetPageContentService {
    constructor(
        private readonly repository: PageContentsRepository,
    ) {
    }
    
    
    public async getPageContentByPageAndKey({
                                                page,
                                                key,
                                                locale,
                                            }: {
        page: string,
        key: string,
        locale?: AppLocaleValue
    }): Promise<PageContentDto | null> {
        return this.repository.findOne({
            page,
            key,
            ...(locale ? { locale } : {}),
        })
    }
}
