export type HomePageContent = {
    seo: {
        title: string
        description: string
    }
    heroWidget: {
        title: string
        subtitle: string
        description: string
    }
    productsWidget: {
        title: string
        description: string
        gpsMonitoringAndDispatching: {
            title: string
            description: string
            desktopImage: string
            mobileImage: string
        }
        eTicket: {
            title: string
            description: string
            desktopImage: string
            mobileImage: string
        }
        smartSociety: {
            title: string
            description: string
            desktopImage: string
            mobileImage: string
        }
    }
    smartSocietyWidget: {
        title: string
        subtitle: string
        video: string
        videoPreview: string
        description: string
        cards: {
            title: string
            subtitle: string
            image: string
        }[]
    }
    feedbackWidget: {
        title: string
        description: string
        imageDesktop: string
        imageMobile: string
    }
}