import { ClientPageData } from '@common/clientPageData/clientPageData'

export class BuildClientResponseFormat {
    public static pageData<
        PageContent extends Record<string, unknown>,
        Data = null
    >(
        pageContent: Partial<PageContent>,
        data?: Data,
    ): ClientPageData<PageContent, Data> {
        
        return {
            pageContent,
            data: data || null as Data,
        }
    }
}