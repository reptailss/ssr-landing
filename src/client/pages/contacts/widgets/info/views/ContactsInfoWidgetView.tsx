import React from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { OnSubmitContactForm } from '@client-shared/forms/contactForm/types'
import { ContactForm } from '@client-shared/forms/contactForm/ContactForm'

export const ContactsInfoWidgetView = ({
                                           title,
                                           address,
                                           phoneNumbers,
                                           email,
                                           emailForPress,
                                           onSubmitContactForm,
                                           recipientEmails,
                                       }: {
    address: string
    phoneNumbers: string[]
    email: string
    emailForPress: string
    title: string
    recipientEmails: string[]
    onSubmitContactForm: OnSubmitContactForm
}) => {
    const t = useTranslation()
    
    return (
        <section
            className={styles.root}
        >
            <img
                src={'/images/contacts-bg.jpeg'}
                className={styles.img}
                alt={'bg'}
            />
            
            <div className={styles.overlay} />
            
            <Container
                className={styles.container}
            >
                <div
                    className={styles.inner}
                >
                    <h1
                        className={styles.title}
                    >
                        {title}
                    </h1>
                    
                    <h5
                        className={styles.address}
                    >
                        {address}
                    </h5>
                    
                    
                    {phoneNumbers.map((phone) => {
                        return (
                            <a
                                href={`tel:${phone}`}
                                key={phone}
                                className={styles.phoneNumbers}
                            >
                                {phone}
                            </a>
                        )
                    })}
                    
                    <p
                        className={styles.email}
                    >
                        {t('email')}:{email}
                    </p>
                    
                    <p
                        className={styles.email}
                    >
                        {t('forPress')}:{emailForPress}
                    </p>
                </div>
                
                <ContactForm
                    onSubmit={onSubmitContactForm}
                    className={styles.form}
                    formName={'contacts-page-contact'}
                    recipientEmails={recipientEmails}
                />
            
            </Container>
        </section>
    )
}

