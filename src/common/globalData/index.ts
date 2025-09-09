import { SharedContent } from '@common/sharedContent'

export type ClientGlobalData = {
    sharedContent: Partial<SharedContent>
    appPublicDomain: string
}