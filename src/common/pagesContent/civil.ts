import { ClientPaperWidget } from '@common/clientWidgets/clientPaperWidget'

export type CivilPageContent = {
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
    trekWidget:{
        title:string
        levels:{
            title:string
            items:{
                icon:string
                label:string
            }[]
        }[]
    }
    paperWidget: ClientPaperWidget
}