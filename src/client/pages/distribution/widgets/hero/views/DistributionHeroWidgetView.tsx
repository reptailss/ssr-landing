import React from 'react'
import { Container } from '@client-ui/container'
import styles from './styles.module.css'

export const DistributionHeroWidgetView = ({
                                               title,
                                               description,
                                           }: {
    title: string
    description: string
}) => {
    
    return (
        <section
            className={styles.root}
        >
            <Container
                ElementType={'section'}
                className={styles.container}
            >
                <h1
                    className={styles.title}
                >
                    {title}
                </h1>
                
                <h2
                    className={styles.description}
                >
                    {description}
                </h2>
            </Container>
        </section>
    )
}

