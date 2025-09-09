import React from 'react'
import { ClientPaperList } from '@common/clientWidgets/clientPaperWidget'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'
import { classNames } from '@client-utils/classNames'

export const PaperWidgetListView = ({
                                        paperList,
                                        disableFirstBorderRadius,
                                    }: {
    paperList: ClientPaperList
    disableFirstBorderRadius: boolean
}) => {
    return (
        <div
            className={classNames(styles.root, disableFirstBorderRadius && styles.disableFirstBorderRadius)}
        >
            <Container
                className={styles.card}
            >
                {paperList.title && <h6
                    className={styles.cardTitle}
                >
                    {paperList.title}
                </h6>}
                
                {paperList.children.map((child, index) => {
                    return (
                        <div
                            className={styles.item}
                            key={index}
                        >
                            <img
                                src={child.image}
                                alt={child.content}
                                className={styles.img}
                            />
                            <p
                                className={styles.content}
                            >
                                {child.content}
                            </p>
                        </div>
                    )
                })}
            </Container>
        </div>
    )
}

