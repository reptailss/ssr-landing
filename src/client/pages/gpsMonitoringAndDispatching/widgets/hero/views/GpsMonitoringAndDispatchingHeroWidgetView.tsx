import React from 'react'
import { Container } from '@client-ui/container'
import styles from './styles.module.css'

export const GpsMonitoringAndDispatchingHeroWidgetView = ({
                                                              title,
                                                              description,
                                                              image,
                                                          }: {
    title: string
    description: string
    image: string
}) => {
    return (
        <section
            className={styles.root}
        >
            <Container
                ElementType={'section'}
                className={styles.container}
            >
                <div>
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
                </div>
                
                <img
                    src={image}
                    alt={'hero'}
                    className={styles.img}
                />
            </Container>
        </section>
    )
}

