export type SharedContent = {
    eTicketPortalWidget: {
        title: string
        link: string
        image: string
        mapImage: string
    }
    socialWidget: {
        title: string
        socialList: {
            image: string
            link: string
        }[]
    }
    contactUsForm: {
        recipientEmails: string[]
    }
    smartSociety:{
        presentation:string
    }
}