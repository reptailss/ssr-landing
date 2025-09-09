import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { HeaderNavItem } from '@client-shared/layouts/header/types'

export const MOBILE_HEADER_NAV: HeaderNavItem[] = [
    {
        href: CLIENT_ROUTE_PATHS.home,
        key: 'aboutTheCompany',
        children:[]
    },
    {
        href: CLIENT_ROUTE_PATHS.products,
        key: 'products',
        children: [],
    },
    {
        href: CLIENT_ROUTE_PATHS.civil,
        key: 'civil',
        children:[]
    },
    {
        href: CLIENT_ROUTE_PATHS.news,
        key: 'news',
        children: [],
    },
    {
        href: CLIENT_ROUTE_PATHS.contacts,
        key: 'contacts',
        children: [],
    },
]