import { ClientPaperWidget } from '@common/clientWidgets/clientPaperWidget'

export type ETicketPageContent = {
    seo: {
        title: string
        description: string
    }
    heroWidget: {
        title: string
        description: string
        image: string
        eTicketPortal:{
            title: string
            link: string
            image: string
        }
    }
    afpsWidget: {
        title: string
        list: string[]
    }
    paperWidget: ClientPaperWidget
    implementationAfpsWidget: {
        content: string
    }
}