import { SharedContent } from '@common/sharedContent'

export const DEFAULT_SHARED_CONTENT_EN: SharedContent = {
    eTicketPortalWidget: {
        title: 'Information and Reference Resource on the E-Ticket',
        link: 'https://info.ua-gis.com',
        image: '/images/e-ticket-portal-image.jpg',
        mapImage: '/images/e-ticket-portal-map.jpg',
    },
    socialWidget: {
        title: 'Also follow us on social media',
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
    smartSociety: {
        presentation:'/pdf/smart-society-presentation-uk.pdf'
    },
}
