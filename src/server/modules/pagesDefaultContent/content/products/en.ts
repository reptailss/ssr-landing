import { ProductsPageContent } from '@common/pagesContent/products'

export default {
    seo: {
        title: 'GIS - Key Products',
        description: 'The GIS Group of Companies develops and implements proprietary digital solutions and also operates the electronic ticket system, Smart City systems, and other urban digital services. Our technologies perform effectively in real-world conditions.',
    },
    productsWidget: {
        gpsMonitoringAndDispatching: {
            description: 'GPS monitoring and dispatching',
            desktopImage: '/images/gps-product-card-desktop.jpg',
            mobileImage: '/images/gps-product-card-mobile.jpg',
        },
        eTicket: {
            description: 'Electronic transport ticketing system (ASOOP)',
            desktopImage: '/images/e-ticket-product-card-desktop.jpg',
            mobileImage: '/images/e-ticket-product-card-mobile.jpg',
        },
        smartSociety: {
            description: 'Smart Society',
            desktopImage: '/images/smart-society-product-card-desktop.jpg',
            mobileImage: '/images/smart-society-product-card-mobile.jpg',
        },
        otherSolutions: {
            description: 'Other solutions',
            desktopImage: '/images/other-solutions-product-card-desktop.jpg',
            mobileImage: '/images/other-solutions-product-card-mobile.jpg',
        },
    },
} satisfies ProductsPageContent
