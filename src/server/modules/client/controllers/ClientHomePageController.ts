import { appLogger, ControllerDec, LocaleDec } from 'os-core-ts'
import { ReactSsrDec } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocale } from '@common/locales'
import { GetAllNewsService } from '@modules/news/services/GetAllNewsService'
import { HomeClientPageData } from '@common/clientPageData/home'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { NewsDto } from '@common/dto/newsDto'


@ControllerDec()
export class ClientHomePageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService = new ClientPageDataService(),
        private readonly getAllNewsService: GetAllNewsService = new GetAllNewsService(),
    ) {
    }
    
    @ReactSsrDec(CLIENT_ROUTE_PATHS.home)
    public async home(
        @LocaleDec locale: AppLocale | null,
    ): Promise<HomeClientPageData> {
        const pageContent = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.home,
            locale,
        )
        const lastNewsList = await this.getLastNewsList(locale)
        
        return BuildClientResponseFormat.pageData(pageContent, {
            lastNewsList,
        })
    }
    
    private async getLastNewsList(locale: AppLocale | null): Promise<NewsDto[]> {
        try {
            return await this.getAllNewsService.getLastNewsList(3, locale)
        } catch (error) {
            appLogger.error('error get news', error)
            return []
        }
    }
    
}
