import { AppLocale, Controller } from 'os-core-ts'
import { ReactSsr } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocaleValue } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { TermsOfUseClientPageData } from '@common/clientPageData/termsOfUse'


@Controller()
export class ClientTermsOfUsePageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService,
    ) {
    }
    
    @ReactSsr(CLIENT_ROUTE_PATHS.termsOfUse)
    public async termsOfUse(
        @AppLocale() locale: AppLocaleValue | null,
    ): Promise<TermsOfUseClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.termsOfUse,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageData)
    }
    
}
