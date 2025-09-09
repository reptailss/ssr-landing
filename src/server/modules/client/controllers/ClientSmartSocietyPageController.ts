import { ControllerDec, LocaleDec } from 'os-core-ts'
import { ReactSsrDec } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocale } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { SmartSocietyClientPageData } from '@common/clientPageData/smartSociety'


@ControllerDec()
export class ClientSmartSocietyPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService = new ClientPageDataService(),
    ) {
    }
    
    @ReactSsrDec(CLIENT_ROUTE_PATHS.smartSociety)
    public async smartSociety(
        @LocaleDec locale: AppLocale | null,
    ): Promise<SmartSocietyClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.smartSociety,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageData)
    }
    
}
