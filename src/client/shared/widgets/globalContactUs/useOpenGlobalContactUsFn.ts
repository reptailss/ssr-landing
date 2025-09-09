import { useCallback, useContext } from 'react'
import { GlobalContactUsWidgetContext } from '@client-shared/widgets/globalContactUs/context'

export function useOpenGlobalContactUsFn(): () => void {
    const setOpen = useContext(GlobalContactUsWidgetContext)
    return useCallback(() => {
        setOpen(true)
    }, [])
}