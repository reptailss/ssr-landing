import { ClientPaperWidget } from '@common/clientWidgets/clientPaperWidget'

export type GpsMonitoringAndDispatchingPageContent = {
    seo: {
        title: string
        description: string
    }
    heroWidget: {
        title: string
        description: string
        image: string
    }
    functionalityWidget: {
        title: string
        functionalityList: {
            image: string
            title: string
            description: string
        }[]
        advantages: {
            title: string
            list: string[]
        }
        tags: string[]
    }
    paperWidget: ClientPaperWidget
    
    eTransportWidget: {
        content: string
    }
}