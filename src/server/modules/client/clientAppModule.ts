import { AppModule } from 'os-core-ts'
import { ClientHomePageController } from '@modules/client/controllers/ClientHomePageController'
import { ClientSiteMapController } from '@modules/client/controllers/ClientSiteMapController'
import { ClientProductsPageController } from '@modules/client/controllers/ClientProductsPageController'
import { ClientGpsMonDispatchPageController } from '@modules/client/controllers/ClientGpsMonDispatchPageController'
import { ClientETicketPageController } from '@modules/client/controllers/ClientETicketPageController'
import { ClientDistributionPageController } from '@modules/client/controllers/ClientDistributionPageController'
import { ClientSmartSocietyPageController } from '@modules/client/controllers/ClientSmartSocietyPageController'
import { ClientContactsPageController } from '@modules/client/controllers/ClientContactsPageController'
import { ClientNewsPageController } from '@modules/client/controllers/ClientNewsPageController'
import { ClientTermsOfUsePageController } from '@modules/client/controllers/ClientTermsOfUsePageController'
import { ClientPrivacyPolicyPageController } from '@modules/client/controllers/ClientPrivacyPolicyPageController'
import { ClientCivilPageController } from '@modules/client/controllers/ClientCivilPageController'

export const clientAppModule = new AppModule({
    controllers: [
        ClientHomePageController,
        ClientProductsPageController,
        ClientGpsMonDispatchPageController,
        ClientETicketPageController,
        ClientDistributionPageController,
        ClientSmartSocietyPageController,
        ClientCivilPageController,
        ClientContactsPageController,
        ClientNewsPageController,
        ClientTermsOfUsePageController,
        ClientPrivacyPolicyPageController,
        ClientSiteMapController,
    ],
})
