import React, { ReactNode, useCallback } from 'react'
import { GlobalSearchWidgetContext } from '@client-shared/widgets/globalSearch/context'
import { NewsModalSearchWidget } from '@client-shared/widgets/news/NewsModalSearchWidget'
import { BodyHelper } from '@client-utils/body/BodyHelper'

export const GlobalSearchWidgetProvider = ({
                                               children,
                                           }: {
    children: ReactNode
}) => {
    const [open, setOpen] = React.useState<boolean>(false)
    
    const onClose = useCallback(() => {
        BodyHelper.unlockScroll()
        setOpen(false)
    }, [])
    const handleOpen = useCallback((open:boolean)=>{
        if(open){
            BodyHelper.lockScroll()
        }else{
            BodyHelper.unlockScroll()
        }
        setOpen(open)
    },[])
    return (
        <GlobalSearchWidgetContext.Provider
            value={handleOpen}
        >
            <NewsModalSearchWidget
                open={open}
                onClose={onClose}
            />
            
            {children}
        </GlobalSearchWidgetContext.Provider>
    )
}

