import { Controller, AppLocale } from 'os-core-ts'
import { ReactSsr } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocaleValue } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { ContactsClientPageData } from '@common/clientPageData/contacts'


@Controller()
export class ClientContactsPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService,
    ) {
    }
    
    @ReactSsr(CLIENT_ROUTE_PATHS.contacts)
    public async contacts(
        @AppLocale() locale: AppLocaleValue | null,
    ): Promise<ContactsClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.contacts,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageData)
    }
    
}
