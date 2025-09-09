import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { HeaderNavItem } from '@client-shared/layouts/header/types'
import { FooterNavItem } from '@client-shared/layouts/footer/types'

export const FOOTER_NAV: FooterNavItem[] = [
    {
        href: CLIENT_ROUTE_PATHS.termsOfUse,
        key: 'termsOfUse',
    },
    {
        href: CLIENT_ROUTE_PATHS.privacyPolicy,
        key: 'privacyPolicy',
    },
]