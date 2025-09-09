import { HomePageContent } from '@common/pagesContent/home'

export default {
    seo: {
        title: 'GIS - Розвиваємо сферу цифрових рішень для міст України і не тільки',
        description: 'Група компаній ГЕОІНФОРМАЦІЙНІ СИСТЕМИ. Наше майбутнє лежить у векторі створення, впровадження та використання власного цифрового продукту',
    },
    heroWidget: {
        title: 'Розвиваємо сферу цифрових рішень для міст України і не тільки',
        subtitle: 'Група компаній ГЕОІНФОРМАЦІЙНІ СИСТЕМИ',
        description: 'Наше майбутнє лежить у векторі створення, впровадження та використання власного цифрового продукту',
    },
    productsWidget: {
        title: 'Основні продукти',
        description: 'Група компаній ГІС займається розробкою та впровадженням власних цифрових рішень, а також є оператором електронного квитка, систем Smart City та інших міських цифрових сервісів. Наші технології успішно працюють у реальних умовах та є ефективними. ',
        gpsMonitoringAndDispatching: {
            title: 'GPS-моніторинг',
            description: 'GPS-моніторинг та диспетчеризація',
            desktopImage: '/images/gps-product-card-desktop.jpg',
            mobileImage: '/images/gps-product-card-mobile.jpg',
        },
        eTicket: {
            title: 'E- Ticket',
            description: 'Електронний квиток у транспорті (АСООП)',
            desktopImage: '/images/e-ticket-product-card-desktop.jpg',
            mobileImage: '/images/e-ticket-product-card-mobile.jpg',
        },
        smartSociety: {
            title: 'Smart Society',
            description: 'Smart Society',
            desktopImage: '/images/smart-society-product-card-desktop.jpg',
            mobileImage: '/images/smart-society-product-card-mobile.jpg',
        },
    },
    smartSocietyWidget: {
        title: 'Платформа Smart Society',
        subtitle: 'Постійне розширення та удосконалення рішень робить групу компаній “ГІС” все помітнішими. На сьогодні платформа Smart Society охоплює:',
        video: '',
        videoPreview: '/images/home-smart-society-video-preview.jpg',
        description: 'Система перевірена часом та адаптована до потреб сучасних міських адміністрацій.\n \n Забезпечуємо швидку інтеграцію, надійність та максимальну зручність для мешканців міст.',
        cards: [
            {
                title: '5',
                subtitle: 'Міст України',
                image: '/images/home-smart-society-slider-banner-1.jpg',
            },
            {
                title: '<5000',
                subtitle: 'Транспортних засобів',
                image: '/images/home-smart-society-slider-banner-2.jpg',
            },
            {
                title: '750 K',
                subtitle: 'Пасажирів',
                image: '/images/home-smart-society-slider-banner-3.jpg',
            },
        ],
    },
    feedbackWidget: {
        title: 'Зворотній зв’язок',
        description: 'Якщо Вас зацікавила наші сервіси звертайтеся, ми з радістю проведемо презентацію діючих сервісів, а також адаптуємо будь-яке із них під потреби вашого бізнесу.',
        imageDesktop: '/images/home-feedback-bg-desktop.jpg',
        imageMobile: '/images/home-feedback-bg-mobile.jpg',
    },
} satisfies HomePageContent