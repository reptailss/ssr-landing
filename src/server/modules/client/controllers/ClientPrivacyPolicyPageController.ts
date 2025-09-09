import { ControllerDec, LocaleDec } from 'os-core-ts'
import { ReactSsrDec } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocale } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { PrivacyPolicyClientPageData } from '@common/clientPageData/privacyPolicy'


@ControllerDec()
export class ClientPrivacyPolicyPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService = new ClientPageDataService(),
    ) {
    }
    
    @ReactSsrDec(CLIENT_ROUTE_PATHS.privacyPolicy)
    public async privacyPolicy(
        @LocaleDec locale: AppLocale | null,
    ): Promise<PrivacyPolicyClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.privacyPolicy,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageData)
    }
    
}
