import { Controller, AppLocale } from 'os-core-ts'
import { ReactSsr } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocaleValue } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { SmartSocietyClientPageData } from '@common/clientPageData/smartSociety'


@Controller()
export class ClientSmartSocietyPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService,
    ) {
    }
    
    @ReactSsr(CLIENT_ROUTE_PATHS.smartSociety)
    public async smartSociety(
        @AppLocale() locale: AppLocaleValue | null,
    ): Promise<SmartSocietyClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.smartSociety,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageData)
    }
    
}
