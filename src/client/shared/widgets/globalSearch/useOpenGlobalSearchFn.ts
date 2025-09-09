import { useCallback, useContext } from 'react'
import { GlobalSearchWidgetContext } from '@client-shared/widgets/globalSearch/context'

export function useOpenGlobalSearchFn(): () => void {
    const setOpen = useContext(GlobalSearchWidgetContext)
    return useCallback(() => {
        setOpen(true)
    }, [])
}