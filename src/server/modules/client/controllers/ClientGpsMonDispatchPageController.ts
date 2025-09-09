import { ControllerDec, LocaleDec } from 'os-core-ts'
import { ReactSsrDec } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocale } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { GpsMonitoringAndDispatchingClientPageData } from '@common/clientPageData/gpsMonitoringAndDispatching'

@ControllerDec()
export class ClientGpsMonDispatchPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService = new ClientPageDataService(),
    ) {
    }
    
    @ReactSsrDec(CLIENT_ROUTE_PATHS.gpsMonitoringAndDispatching)
    public async gpsMonitoringAndDispatching(
        @LocaleDec locale: AppLocale | null,
    ): Promise<GpsMonitoringAndDispatchingClientPageData> {
        
        const pageContent = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.gpsMonitoringAndDispatching,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageContent)
    }
    
}
