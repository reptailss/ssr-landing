import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { HeaderNavItem } from '@client-shared/layouts/header/types'

export const HEADER_NAV: HeaderNavItem[] = [
    {
        href: CLIENT_ROUTE_PATHS.home,
        key: 'aboutTheCompany',
        children:[]
    },
    {
        href: CLIENT_ROUTE_PATHS.products,
        key: 'products',
        children:[
            {
                href: CLIENT_ROUTE_PATHS.gpsMonitoringAndDispatching,
                key: 'gpsMonitoringAndDispatching',
            },
            {
                href: CLIENT_ROUTE_PATHS.eTicket,
                key: 'eTicket',
            },
            {
                href: CLIENT_ROUTE_PATHS.smartSociety,
                key: 'smartSociety',
            },
            {
                href: CLIENT_ROUTE_PATHS.distribution,
                key: 'distributions',
            }
        ]
    },
    {
        href: CLIENT_ROUTE_PATHS.civil,
        key: 'civil',
        children:[]
    },
    {
        href: CLIENT_ROUTE_PATHS.news,
        key: 'news',
        children:[]
    },
    {
        href: CLIENT_ROUTE_PATHS.contacts,
        key: 'contacts',
        children:[]
    },
]