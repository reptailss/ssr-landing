import React, { ReactNode } from 'react'
import { HomePageContent } from '@common/pagesContent/home'
import { HomeFeedbackWidgetView } from '@client-pages/home/widgets/feedback/views/HomeFeedbackWidgetView'
import { ContactUsApi } from '@client-shared/api/ContactUsApi'
import { useClientSharedData } from '@client-shared/sharedData/useClientSharedData'

export const HomeFeedbackWidget = ({
                                       content,
                                       children,
                                   }: {
    content: HomePageContent['feedbackWidget']
    children?: ReactNode
}) => {
    const { contactUsForm } = useClientSharedData()
    return (
        <HomeFeedbackWidgetView
            title={content.title}
            description={content.description}
            imageDesktop={content.imageDesktop}
            imageMobile={content.imageMobile}
            onSubmitContactForm={ContactUsApi.contactUs}
            children={children}
            recipientEmails={contactUsForm.recipientEmails}
        />
    )
}

