export const CLIENT_ROUTE_PATHS = {
    home: '/',
    products: '/products',
    gpsMonitoringAndDispatching:'/products/gps-monitoring-and-dispatching',
    eTicket:'/products/e-ticket',
    smartSociety:'/products/smart-society',
    distribution:'/products/distribution',
    civil:'/apps/civil',
    about: '/about',
    news: '/news',
    newsPost: '/news/:slug',
    termsOfUse: '/terms-of-use',
    privacyPolicy: '/privacy-policy',
    contacts: '/contacts',
} as const

export type ClientRoutePaths = typeof CLIENT_ROUTE_PATHS