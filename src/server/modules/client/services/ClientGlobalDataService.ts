import { SharedContent } from '@common/sharedContent'
import { AppLocale } from '@common/locales'
import { appLogger } from 'os-core-ts'
import { GetAllSharedContentsService } from '@modules/sharedContents/services/getAllSharedContentsService'
import { ClientGlobalData } from '@common/globalData'
import { APP_SERVER_CONFIG } from '@config'


export class ClientGlobalDataService {
    
    constructor(
        private readonly getAllSharedContentsService: GetAllSharedContentsService = new GetAllSharedContentsService(),
    ) {
    }
    
    public async getGlobalData(locale: AppLocale | null): Promise<ClientGlobalData> {
        const sharedContent = await this.loadSharedContent(locale)
        return {
            sharedContent,
            appPublicDomain: APP_SERVER_CONFIG.appPublicDomain,
        }
    }
    
    private async loadSharedContent(
        locale: AppLocale | null,
    ): Promise<Partial<SharedContent>> {
        try {
            const sharedContentList = await this.getAllSharedContentsService.getSimpleSharedContents(
                locale,
            )
            if (!sharedContentList.length) {
                return {}
            }
            const map: Partial<SharedContent> = {}
            for (let i = 0; i < sharedContentList.length; i++) {
                const sharedContentRow = sharedContentList[i]
                map[sharedContentRow.key as keyof SharedContent] = sharedContentRow.value as any
            }
            
            return map
        } catch (error) {
            appLogger.error('error get shared content', error)
            return {}
        }
    }
}