import { ControllerDec, LocaleDec } from 'os-core-ts'
import { ReactSsrDec } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocale } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { ContactsClientPageData } from '@common/clientPageData/contacts'


@ControllerDec()
export class ClientContactsPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService = new ClientPageDataService(),
    ) {
    }
    
    @ReactSsrDec(CLIENT_ROUTE_PATHS.contacts)
    public async contacts(
        @LocaleDec locale: AppLocale | null,
    ): Promise<ContactsClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.contacts,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageData)
    }
    
}
