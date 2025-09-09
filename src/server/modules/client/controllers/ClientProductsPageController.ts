import { ControllerDec, LocaleDec } from 'os-core-ts'
import { ReactSsrDec } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocale } from '@common/locales'
import { ProductsClientPageData } from '@common/clientPageData/products'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'


@ControllerDec()
export class ClientProductsPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService = new ClientPageDataService(),
    ) {
    }
    
    @ReactSsrDec(CLIENT_ROUTE_PATHS.products)
    public async products(
        @LocaleDec locale: AppLocale | null,
    ): Promise<ProductsClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.products,
            locale,
        )
        return BuildClientResponseFormat.pageData(pageData)
    }
    
}
