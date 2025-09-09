import React, { ReactNode } from 'react'

import { Container } from '@client-ui/container'
import styles from './styles.module.css'

export const HomeSmartSocietyWidgetView = ({
                                               title,
                                               description,
                                               children,
                                           }: {
    title: string
    description: string
    children: ReactNode
}) => {
    return (
        <section
            className={styles.root}
        >
            <Container>
                <h5
                    className={styles.title}
                >
                    {title}
                </h5>
                
                <p
                    className={styles.description}
                >
                    {description}
                </p>
                
                {children}
            </Container>
        </section>
    )
}

