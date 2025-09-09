import { PagePageContentDefaultValues } from '@client-shared/pageData/types'
import { ClientRoutePaths } from '@common/clientRoutePaths'
import home from './home'
import products from './products'
import gpsMonitoringAndDispatching from './gpsMonitoringAndDispatching'
import eTicket from './eTicket'
import smartSociety from './smartSociety'
import distribution from './distribution'
import about from './about'
import news from './news'
import newsPost from './newsPost'
import termsOfUse from './termsOfUse'
import privacyPolicy from './privacyPolicy'
import contacts from './contacts'
import civil from './civil'

export default {
    home,
    products,
    gpsMonitoringAndDispatching,
    eTicket,
    smartSociety,
    distribution,
    about,
    news,
    newsPost,
    termsOfUse,
    privacyPolicy,
    contacts,
    civil
} satisfies Record<keyof ClientRoutePaths, PagePageContentDefaultValues<Record<string, unknown>>>