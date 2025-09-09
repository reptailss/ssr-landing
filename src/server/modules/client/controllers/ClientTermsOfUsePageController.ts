import { ControllerDec, LocaleDec } from 'os-core-ts'
import { ReactSsrDec } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocale } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { TermsOfUseClientPageData } from '@common/clientPageData/termsOfUse'


@ControllerDec()
export class ClientTermsOfUsePageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService = new ClientPageDataService(),
    ) {
    }
    
    @ReactSsrDec(CLIENT_ROUTE_PATHS.termsOfUse)
    public async termsOfUse(
        @LocaleDec locale: AppLocale | null,
    ): Promise<TermsOfUseClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.termsOfUse,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageData)
    }
    
}
