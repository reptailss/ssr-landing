import { AppLocaleValue } from '@common/locales'
import { appLogger, Injectable } from 'os-core-ts'
import { GetAllPageContentsService } from '@modules/pageContents/services/getAllPageContentsService'

@Injectable()
export class ClientPageDataService {
    
    constructor(
        private readonly getAllPageContentsService: GetAllPageContentsService,
    ) {
    }
    
    public async getPageData<PageContent extends Record<string, unknown>>(
        page: string,
        locale: AppLocaleValue | null,
    ): Promise<Partial<PageContent>> {
        try {
            const pageContentList = await this.getAllPageContentsService.getSimpleContentsByPage(
                page,
                locale,
            )
            if (!pageContentList.length) {
                return {}
            }
            const map: Partial<PageContent> = {}
            for (let i = 0; i < pageContentList.length; i++) {
                const pageContent = pageContentList[i]
                map[pageContent.key as keyof PageContent] = pageContent.value as PageContent[keyof PageContent]
            }
            
            return map
        } catch (error) {
            appLogger.error('error get page content', error)
            return {}
        }
    }
}