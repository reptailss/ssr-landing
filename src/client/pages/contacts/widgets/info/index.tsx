import React from 'react'
import { ContactsPageContent } from '@common/pagesContent/contacts'
import { ContactsInfoWidgetView } from '@client-pages/contacts/widgets/info/views/ContactsInfoWidgetView'
import { useClientSharedData } from '@client-shared/sharedData/useClientSharedData'
import { ContactUsApi } from '@client-shared/api/ContactUsApi'

export const ContactsInfoWidget = ({
                                       content,
                                   }: {
    content: ContactsPageContent['infoWidget']
}) => {
    const { contactUsForm } = useClientSharedData()
    
    return (
        <ContactsInfoWidgetView
            title={content.title}
            email={content.email}
            address={content.address}
            emailForPress={content.emailForPress}
            phoneNumbers={content.phoneNumbers}
            onSubmitContactForm={ContactUsApi.contactUs}
            recipientEmails={contactUsForm.recipientEmails}
        />
    )
}

