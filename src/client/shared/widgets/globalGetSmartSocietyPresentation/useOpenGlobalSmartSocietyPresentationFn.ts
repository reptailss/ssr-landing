import { useCallback, useContext } from 'react'
import {
    GlobalGetSmartSocietyPresentationWidgetContext,
} from '@client-shared/widgets/globalGetSmartSocietyPresentation/context'

export function useOpenGlobalSmartSocietyPresentationFn(): () => void {
    const setOpen = useContext(GlobalGetSmartSocietyPresentationWidgetContext)
    return useCallback(() => {
        setOpen(true)
    }, [])
}