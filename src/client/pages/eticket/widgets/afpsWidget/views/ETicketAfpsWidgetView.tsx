import React from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'

export const ETicketAfpsWidgetView = ({
                                          title,
                                          list,
                                      }: {
    title: string
    list: string[]
}) => {
    
    return (
        <section
            className={styles.root}
        >
            <Container>
                <h4
                    className={styles.title}
                >
                    {title}
                </h4>
                
                <ul
                    className={styles.list}
                >
                    {list.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={styles.card}
                            >
                                <div
                                    className={styles.numberInner}
                                >
                                    <p
                                        className={styles.number}
                                    >
                                        {index + 1}.
                                    </p>
                                    
                                    <div className={styles.numberLine} />
                                </div>
                                
                                <p
                                    className={styles.content}
                                >
                                    {item}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </Container>
        </section>
    )
}

