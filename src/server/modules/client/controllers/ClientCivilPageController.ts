import { ControllerDec, LocaleDec } from 'os-core-ts'
import { ReactSsrDec } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocale } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { CivilClientPageData } from '@common/clientPageData/civil'


@ControllerDec()
export class ClientCivilPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService = new ClientPageDataService(),
    ) {
    }
    
    @ReactSsrDec(CLIENT_ROUTE_PATHS.civil)
    public async civil(
        @LocaleDec locale: AppLocale | null,
    ): Promise<CivilClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.civil,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageData)
    }
    
}
