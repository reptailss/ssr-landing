import React from 'react'
import { ClientPaperWidget } from '@common/clientWidgets/clientPaperWidget'
import { PaperWidgetRootView } from '@client-shared/widgets/paperWidget/views/root/PaperWidgetRootView'
import { PaperWidgetListView } from '@client-shared/widgets/paperWidget/views/list/PaperWidgetListView'
import { PaperWidgetCardView } from '@client-shared/widgets/paperWidget/views/card/PaperWidgetCardView'

export const PaperWidget = ({
                                paperWidget,
                            }: {
    paperWidget: ClientPaperWidget
}) => {
    const disableFirstBorderRadius = !!paperWidget.title
    return (
        <PaperWidgetRootView
            title={paperWidget.title}
        >
            {
                paperWidget.children.map((child, index) => {
                    switch (child.type) {
                        case 'client-paper-list':
                            return (
                                <PaperWidgetListView
                                    key={index}
                                    paperList={child}
                                    disableFirstBorderRadius={disableFirstBorderRadius}
                                />
                            )
                        case 'client-paper-card':
                            return (
                                <PaperWidgetCardView
                                    key={index}
                                    paperCard={child}
                                    disableFirstBorderRadius={disableFirstBorderRadius}
                                />
                            )
                        default:
                            return null
                    }
                })
            }
        </PaperWidgetRootView>
    )
}

