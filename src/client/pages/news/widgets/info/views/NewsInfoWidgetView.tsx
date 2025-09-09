import React from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'

export const NewsInfoWidgetView = ({
                                       title,
                                   }: {
    title: string
}) => {
    return (
        <Container>
            <h1
                className={styles.title}
            >
                {title}
            </h1>
        </Container>
    )
}

