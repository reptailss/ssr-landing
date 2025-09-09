import { ClientPaperWidget } from '@common/clientWidgets/clientPaperWidget'

export type SmartSocietyPageContent = {
    seo: {
        title: string
        description: string
    }
    heroWidget: {
        title: string
        description: string
        video: string
        videoPreview: string
    }
    uniqueWidget: {
        title: string
        list: Array<
            {
                type: 'image'
                image: string
                desktopCol: number
            } |
            {
                type: 'card'
                title: string
                list: string[]
                desktopCol: number
            }
        >
    }
    smartSocietyWidget: {
        title: string
        description: string
        banner: {
            icons: string[]
            title: string
            image: string
        }
    }
    paperWidget: ClientPaperWidget
    getPresentationWidget: {
        description: string
    }
}