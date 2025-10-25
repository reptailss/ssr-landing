import { Controller, AppLocale } from 'os-core-ts'
import { ReactSsr } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocaleValue } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { ETicketClientPageData } from '@common/clientPageData/eTicket'

@Controller()
export class ClientETicketPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService,
    ) {
    }
    
    @ReactSsr(CLIENT_ROUTE_PATHS.eTicket)
    public async eTicket(
        @AppLocale() locale: AppLocaleValue | null,
    ): Promise<ETicketClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.eTicket,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageData)
    }
    
}
