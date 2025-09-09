import React, { ReactNode } from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'

export const HomeProductsWidgetView = ({
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
                <h3
                    className={styles.title}
                >
                    {title}
                </h3>
                
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

