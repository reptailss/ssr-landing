import { createContext } from 'react'
import { SharedContent } from '@common/sharedContent'

export const SharedDataContextValue = createContext<SharedContent | undefined>(undefined)