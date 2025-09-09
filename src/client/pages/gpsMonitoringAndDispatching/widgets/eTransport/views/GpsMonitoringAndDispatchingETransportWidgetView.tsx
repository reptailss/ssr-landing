import React from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'
import { InnerHtml } from '@client-ui/innerHtml'

export const GpsMonitoringAndDispatchingETransportWidgetView = ({
                                                                    content,
                                                                }: {
    content: string
}) => {
    return (
        <section
            className={styles.root}
        >
            <Container>
                <InnerHtml
                    className={styles.content}
                    html={content}
                />
            </Container>
        </section>
    )
}

