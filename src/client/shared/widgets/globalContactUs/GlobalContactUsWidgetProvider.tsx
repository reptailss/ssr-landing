import React, { ReactNode, useCallback } from 'react'
import { Modal } from '@client-ui/modal'
import { ContactForm } from '@client-shared/forms/contactForm/ContactForm'
import { ContactUsApi } from '@client-shared/api/ContactUsApi'
import { GlobalContactUsWidgetContext } from '@client-shared/widgets/globalContactUs/context'
import styles from './styles.module.css'
import { BodyHelper } from '@client-utils/body/BodyHelper'
import { useClientSharedData } from '@client-shared/sharedData/useClientSharedData'

export const GlobalContactUsWidgetProvider = ({
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
    
    return (
        <GlobalContactUsWidgetContext.Provider
            value={handleOpen}
        >
            <Modal
                open={open}
                onClose={onClose}
                className={styles.root}
            >
                <ContactForm
                    onSubmit={ContactUsApi.contactUs}
                    formName={'contact-us'}
                    recipientEmails={sharedData.contactUsForm.recipientEmails}
                />
            </Modal>
            
            {children}
        </GlobalContactUsWidgetContext.Provider>
    )
}

