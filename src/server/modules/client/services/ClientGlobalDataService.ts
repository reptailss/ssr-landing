import { SharedContent } from '@common/sharedContent'
import { AppLocaleValue } from '@common/locales'
import { appLogger, Injectable } from 'os-core-ts'
import { GetAllSharedContentsService } from '@modules/sharedContents/services/GetAllSharedContentsService'
import { ClientGlobalData } from '@common/globalData'
import { APP_SERVER_CONFIG } from '@config'


@Injectable()
export class ClientGlobalDataService {
    
    constructor(
        private readonly getAllSharedContentsService: GetAllSharedContentsService,
    ) {
    }
    
    public async getGlobalData(locale: AppLocaleValue | null): Promise<ClientGlobalData> {
        const sharedContent = await this.loadSharedContent(locale)
        return {
            sharedContent,
            appPublicDomain: APP_SERVER_CONFIG.appPublicDomain,
        }
    }
    
    private async loadSharedContent(
        locale: AppLocaleValue | null,
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