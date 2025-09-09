import { ClientPaperWidget } from '@common/clientWidgets/clientPaperWidget'

export type DistributionPageContent = {
    seo: {
        title: string
        description: string
    }
    heroWidget: {
        title: string
        description: string
    }
    paperWidget: ClientPaperWidget
}