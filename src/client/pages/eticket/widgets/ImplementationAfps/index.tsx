import React from 'react'
import { ETicketPageContent } from '@common/pagesContent/eTicket'
import {
    ETicketPageImplementationAfpsWidgetView,
} from '@client-pages/eticket/widgets/ImplementationAfps/views/ETicketPageImplementationAfpsWidgetView'
import { useOpenGlobalContactUsFn } from '@client-shared/widgets/globalContactUs/useOpenGlobalContactUsFn'

export const ETicketImplementationAfpsWidget = ({ content }: {
    content: ETicketPageContent['implementationAfpsWidget']
}) => {
    
    const globalOpenContactUsFn  = useOpenGlobalContactUsFn()
    
    return (
        <ETicketPageImplementationAfpsWidgetView
            content={content.content}
            onClickContactUs={globalOpenContactUsFn}
        />
    )
}

