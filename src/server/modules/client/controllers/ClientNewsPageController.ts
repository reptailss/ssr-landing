import { appLogger, ControllerDec, LocaleDec, ParamDec, QueryParamNumOptionalDec } from 'os-core-ts'
import { ReactSsrDec } from 'os-react-ssr-server'
import { ClientPageDataService } from '@modules/client/services/ClientPageDataService'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AppLocale } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { GetAllNewsService } from '@modules/news/services/GetAllNewsService'
import { NewsClientPageData, NewsPostClientPageData } from '@common/clientPageData/news'
import { NewsDto } from '@common/dto/newsDto'
import { GetNewsService } from '@modules/news/services/GetNewsService'

const NEWS_PER_PAGE = 15
const NEWS_POST_PER_PAGE = 9

@ControllerDec()
export class ClientNewsPageController {
    constructor(
        private readonly clientPageDataService: ClientPageDataService = new ClientPageDataService(),
        private readonly getAllNewsService: GetAllNewsService = new GetAllNewsService(),
        private readonly getNewsService: GetNewsService = new GetNewsService(),
    ) {
    }
    
    @ReactSsrDec(CLIENT_ROUTE_PATHS.news)
    public async news(
        @LocaleDec locale: AppLocale | null,
        @QueryParamNumOptionalDec('page') page: number | undefined,
    ): Promise<NewsClientPageData> {
        
        const pageData = await this.clientPageDataService.getPageData(
            CLIENT_ROUTE_PATHS.news,
            locale,
        )
        const news = await this.getNews(
            page || 1,
            NEWS_PER_PAGE,
            locale,
        )
        
        return BuildClientResponseFormat.pageData(pageData, {
            news,
        })
    }
    
    @ReactSsrDec(CLIENT_ROUTE_PATHS.newsPost)
    public async newsPost(
        @LocaleDec locale: AppLocale | null,
        @QueryParamNumOptionalDec('page') page: number | undefined,
        @ParamDec('slug') slug: string,
    ): Promise<NewsPostClientPageData> {
        
        const news = await this.getNews(
            page || 1,
            NEWS_POST_PER_PAGE,
            locale,
        )
        
        const targetNews = await this.getTargetNews(slug, locale)
        
        return BuildClientResponseFormat.pageData({}, {
            news,
            targetNews,
        })
    }
    
    private async getNews(
        page: number,
        perPage: number,
        locale: AppLocale | null,
    ): Promise<{
        page: number
        all_pages: number
        all_rows: number
        per_page: number
        rows: NewsDto[]
    }> {
        try {
            return await this.getAllNewsService.getNewsPagination({
                    page,
                    per_page: perPage,
                    order: {
                        date_add: 'DESC',
                    },
                },
                locale,
            )
        } catch (error) {
            appLogger.error('error get news for page', error)
            return {
                page: page,
                all_pages: 1,
                all_rows: 0,
                per_page: 10,
                rows: [],
            }
        }
    }
    
    private async getTargetNews(slug: string, locale: AppLocale | null): Promise<NewsDto | null> {
        try {
            return await this.getNewsService.getBySlug(slug, locale)
        } catch (error) {
            appLogger.error('error get target new for page', error)
            return null
        }
    }
}
