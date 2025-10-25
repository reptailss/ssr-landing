import { Controller, AppLocale } from 'os-core-ts'
import { ReactSsr } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocaleValue } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { GpsMonitoringAndDispatchingClientPageData } from '@common/clientPageData/gpsMonitoringAndDispatching'

@Controller()
export class ClientGpsMonDispatchPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService,
    ) {
    }
    
    @ReactSsr(CLIENT_ROUTE_PATHS.gpsMonitoringAndDispatching)
    public async gpsMonitoringAndDispatching(
        @AppLocale() locale: AppLocaleValue | null,
    ): Promise<GpsMonitoringAndDispatchingClientPageData> {
        
        const pageContent = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.gpsMonitoringAndDispatching,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageContent)
    }
    
}
