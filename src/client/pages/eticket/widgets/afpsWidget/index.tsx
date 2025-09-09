import React from 'react'
import { ETicketPageContent } from '@common/pagesContent/eTicket'
import { ETicketAfpsWidgetView } from '@client-pages/eticket/widgets/afpsWidget/views/ETicketAfpsWidgetView'

export const ETicketAfpsWidget = ({
                                      content,
                                  }: {
    content: ETicketPageContent['afpsWidget']
}) => {
    return (
        <ETicketAfpsWidgetView
            title={content.title}
            list={content.list}
        />
    )
}

