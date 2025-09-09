import React, { ReactNode, useCallback } from 'react'
import { Modal } from '@client-ui/modal'
import styles from './styles.module.css'
import { BodyHelper } from '@client-utils/body/BodyHelper'
import { useClientSharedData } from '@client-shared/sharedData/useClientSharedData'
import {
    GlobalGetSmartSocietyPresentationWidgetContext,
} from '@client-shared/widgets/globalGetSmartSocietyPresentation/context'
import { GetPresentationForm } from '@client-shared/forms/getPresentationForm/GetPresentationForm'
import { OnSubmitGetPresentationForm } from '@client-shared/forms/getPresentationForm/types'

export const GlobalGetSmartSocietyPresentationWidgetProvider = ({
                                                                    children,
                                                                }: {
    children: ReactNode
}) => {
    const [open, setOpen] = React.useState<boolean>(false)
    
    const sharedData = useClientSharedData()
    
    const onClose = useCallback(() => {
        BodyHelper.unlockScroll()
        setOpen(false)
    }, [])
    
    const handleOpen = useCallback((open: boolean) => {
        if (open) {
            BodyHelper.lockScroll()
        } else {
            BodyHelper.unlockScroll()
        }
        setOpen(open)
    }, [])
    
    const onSubmit: OnSubmitGetPresentationForm = useCallback(async () => {
    
    }, [])
    return (
        <GlobalGetSmartSocietyPresentationWidgetContext.Provider
            value={handleOpen}
        >
            <Modal
                open={open}
                onClose={onClose}
                className={styles.root}
            >
                <GetPresentationForm
                    onSubmit={onSubmit}
                    presentation={sharedData.smartSociety.presentation}
                />
            </Modal>
            
            {children}
        </GlobalGetSmartSocietyPresentationWidgetContext.Provider>
    )
}

