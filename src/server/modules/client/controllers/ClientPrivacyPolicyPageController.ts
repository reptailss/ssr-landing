import { Controller, AppLocale } from 'os-core-ts'
import { ReactSsr } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocaleValue } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { PrivacyPolicyClientPageData } from '@common/clientPageData/privacyPolicy'


@Controller()
export class ClientPrivacyPolicyPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService,
    ) {
    }
    
    @ReactSsr(CLIENT_ROUTE_PATHS.privacyPolicy)
    public async privacyPolicy(
        @AppLocale() locale: AppLocaleValue | null,
    ): Promise<PrivacyPolicyClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.privacyPolicy,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageData)
    }
    
}
