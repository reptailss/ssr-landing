import { ProductsPageContent } from '@common/pagesContent/products'

export default {
    seo: {
        title: 'GIS - Основні продукти',
        description: 'Група компаній ГІС займається розробкою та впровадженням власних цифрових рішень, а також є оператором електронного квитка, систем Smart City та інших міських цифрових сервісів. Наші технології успішно працюють у реальних умовах та є ефективними.',
    },
    productsWidget: {
        gpsMonitoringAndDispatching: {
            description: 'GPS-моніторинг та диспетчеризація',
            desktopImage: '/images/gps-product-card-desktop.jpg',
            mobileImage: '/images/gps-product-card-mobile.jpg',
        },
        eTicket: {
            description: 'Електронний квиток у транспорті (АСООП)',
            desktopImage: '/images/e-ticket-product-card-desktop.jpg',
            mobileImage: '/images/e-ticket-product-card-mobile.jpg',
        },
        smartSociety: {
            description: 'Smart Society',
            desktopImage: '/images/smart-society-product-card-desktop.jpg',
            mobileImage: '/images/smart-society-product-card-mobile.jpg',
        },
        otherSolutions: {
            description: 'Інші рішення',
            desktopImage: '/images/other-solutions-product-card-desktop.jpg',
            mobileImage: '/images/other-solutions-product-card-mobile.jpg',
        },
    },
} satisfies ProductsPageContent