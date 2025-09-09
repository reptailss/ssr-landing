import { useContext } from 'react'
import { SharedContent } from '@common/sharedContent'
import { SharedDataContextValue } from '@client-shared/sharedData/context/contextValue'


export function useClientSharedData(): SharedContent {
    return useContext(SharedDataContextValue) as SharedContent
}