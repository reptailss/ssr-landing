import { pageContentsModel, PageContentsModel } from '@modules/pageContents/model'
import { PageContentDto } from '@common/dto/pageContentDto'
import { AppLocale } from '@common/locales'

export class GetPageContentService {
    constructor(private readonly model: PageContentsModel = pageContentsModel) {
    }
    
    
    public async getPageContentByPageAndKey({
                                                page,
                                                key,
                                                locale,
                                            }: {
        page: string,
        key: string,
        locale?: AppLocale
    }): Promise<PageContentDto | null> {
        return this.model.findOne({
            filters: {
                page,
                key,
                ...(locale ? { locale } : {}),
            },
        })
    }
}
