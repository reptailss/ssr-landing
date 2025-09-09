import React, { ReactNode } from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'
import { ContactForm } from '@client-shared/forms/contactForm/ContactForm'
import { OnSubmitContactForm } from '@client-shared/forms/contactForm/types'
import { classNames } from '@client-utils/classNames'
import { useServerDeviceType } from 'os-react-ssr-client'

export const HomeFeedbackWidgetView = ({
                                           title,
                                           description,
                                           imageDesktop,
                                           imageMobile,
                                           onSubmitContactForm,
                                           recipientEmails,
                                           children,
                                       }: {
    title: string
    description: string
    imageDesktop: string
    imageMobile: string
    onSubmitContactForm: OnSubmitContactForm
    children?: ReactNode
    hasToTopImage?: boolean
    recipientEmails: string[]
}) => {
    const { isMobile } = useServerDeviceType()
    return (
        <section
            className={styles.root}
        >
            {!isMobile ? <img
                    src={imageDesktop}
                    alt={'preview'}
                    className={classNames(!!children && styles.toTopImg, styles.imgDesktop)}
                    loading="lazy"
                />
                : <img
                    src={imageMobile}
                    alt={'preview'}
                    className={styles.imgMobile}
                    loading="lazy"
                />}
            
            
            <div className={styles.overlay} />
            
            <Container
                className={styles.content}
            >
                <div
                    className={styles.info}
                >
                    <h6
                        className={styles.title}
                    >
                        {title}
                    </h6>
                    
                    <p
                        className={styles.description}
                    >
                        {description}
                    </p>
                </div>
                
                <ContactForm
                    onSubmit={onSubmitContactForm}
                    className={styles.form}
                    formName={'home-page-feedback'}
                    recipientEmails={recipientEmails}
                />
            </Container>
            
            {children && children}
        </section>
    )
}

