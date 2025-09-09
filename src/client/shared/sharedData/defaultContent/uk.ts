import { SharedContent } from '@common/sharedContent'

export const DEFAULT_SHARED_CONTENT_UK: SharedContent = {
    eTicketPortalWidget: {
        title: 'Інформаційно-довідковий ресурс по електронному квитку',
        link: 'https://info.ua-gis.com',
        image: '/images/e-ticket-portal-image.jpg',
        mapImage: '/images/e-ticket-portal-map.jpg',
    },
    socialWidget: {
        title: 'Також слідкуйте за нами в соціальних мережах',
        socialList: [
            {
                image: '/images/in.png',
                link: 'https://www.linkedin.com',
            },
            {
                image: '/images/facebook.png',
                link: 'https://facebook.com',
            },
        ],
    },
    contactUsForm: {
        recipientEmails: [],
    },
    smartSociety:{
        presentation:'/pdf/smart-society-presentation-uk.pdf'
    }
}