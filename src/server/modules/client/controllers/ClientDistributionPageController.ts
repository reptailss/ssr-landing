import { Controller, AppLocale } from 'os-core-ts'
import { ReactSsr } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocaleValue } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { DistributionClientPageData } from '@common/clientPageData/distribution'


@Controller()
export class ClientDistributionPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService,
    ) {
    }
    
    @ReactSsr(CLIENT_ROUTE_PATHS.distribution)
    public async distribution(
        @AppLocale() locale: AppLocaleValue | null,
    ): Promise<DistributionClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.distribution,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageData)
    }
    
}
