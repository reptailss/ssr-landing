import React, { ReactNode } from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'

export const PaperWidgetRootView = ({
                                        children,
                                        title,
                                    }: {
    children: ReactNode
    title?: string | null
}) => {
    return (
        <>
            {
                title && <div
                    className={styles.Wrapper}
                >
                    <Container>
                        <h4
                            className={styles.title}
                        >
                            {title}
                        </h4>
                    </Container>
                </div>
            }
            
            <section>
                {children && children}
            </section>
        </>
    )
}

