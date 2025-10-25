import { AppLocaleValue } from '@common/locales'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'

export class NewsRoutePathBuilder {
    static newsPost(slug: string, locale?: AppLocaleValue) {
        if(locale){
            return  `/${locale}${CLIENT_ROUTE_PATHS.newsPost.replace(':slug', slug)}`
        }
        return CLIENT_ROUTE_PATHS.newsPost.replace(':slug', slug)
    }
}