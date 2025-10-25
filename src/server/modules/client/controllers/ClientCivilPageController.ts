import { Controller, AppLocale } from 'os-core-ts'
import { ReactSsr } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocaleValue } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { CivilClientPageData } from '@common/clientPageData/civil'


@Controller()
export class ClientCivilPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService,
    ) {
    }
    
    @ReactSsr(CLIENT_ROUTE_PATHS.civil)
    public async civil(
        @AppLocale() locale: AppLocaleValue | null,
    ): Promise<CivilClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.civil,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageData)
    }
    
}
