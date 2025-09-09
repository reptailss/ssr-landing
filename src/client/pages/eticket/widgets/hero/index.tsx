import React from 'react'
import { ETicketPageContent } from '@common/pagesContent/eTicket'
import { ETicketHeroWidgetView } from '@client-pages/eticket/widgets/hero/views/ETicketHeroWidgetView'

export const ETicketHeroWidget = ({
                                      content,
                                  }: {
    content: ETicketPageContent['heroWidget']
}) => {
    return (
        <ETicketHeroWidgetView
            title={content.title}
            description={content.description}
            image={content.image}
            eTicketPortal={content.eTicketPortal}
        />
    )
}

