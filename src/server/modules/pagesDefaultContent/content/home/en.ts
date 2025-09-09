import { HomePageContent } from '@common/pagesContent/home'

export default {
    seo: {
        title: 'GIS - Developing digital solutions for cities of Ukraine and beyond',
        description: 'Group of Companies GEOINFORMATION SYSTEMS. Our future lies in the direction of creating, implementing, and using our own digital products',
    },
    heroWidget: {
        title: 'Developing digital solutions for cities of Ukraine and beyond',
        subtitle: 'Group of Companies GEOINFORMATION SYSTEMS',
        description: 'Our future lies in the direction of creating, implementing, and using our own digital products',
    },
    productsWidget: {
        title: 'Key Products',
        description: 'The GIS Group of Companies develops and implements proprietary digital solutions and also operates the electronic ticket system, Smart City systems, and other urban digital services. Our technologies perform effectively in real-world conditions.',
        gpsMonitoringAndDispatching: {
            title: 'GPS Monitoring',
            description: 'GPS monitoring and dispatching',
            desktopImage: '/images/gps-product-card-desktop.jpg',
            mobileImage: '/images/gps-product-card-mobile.jpg',
        },
        eTicket: {
            title: 'E-Ticket',
            description: 'Electronic transport ticketing system (ASOOP)',
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
        title: 'Smart Society Platform',
        subtitle: 'Continuous expansion and improvement of solutions make the GIS Group of Companies increasingly visible. Today, the Smart Society platform includes:',
        video: '',
        videoPreview: '/images/home-smart-society-video-preview.jpg',
        description: 'The system has stood the test of time and is tailored to the needs of modern urban administrations.\nWe ensure rapid integration, reliability, and maximum convenience for city residents.',
        cards: [
            {
                title: '5',
                subtitle: 'Cities of Ukraine',
                image: '/images/home-smart-society-slider-banner-1.jpg',
            },
            {
                title: '<5000',
                subtitle: 'Vehicles',
                image: '/images/home-smart-society-slider-banner-2.jpg',
            },
            {
                title: '750 K',
                subtitle: 'Passengers',
                image: '/images/home-smart-society-slider-banner-3.jpg',
            },
        ],
    },
    feedbackWidget: {
        title: 'Feedback',
        description: 'If you are interested in our services, feel free to contact us — we will be happy to present our existing solutions and adapt any of them to suit your business needs.',
        imageDesktop: '/images/home-feedback-bg-desktop.jpg',
        imageMobile: '/images/home-feedback-bg-mobile.jpg',
    },
} satisfies HomePageContent
