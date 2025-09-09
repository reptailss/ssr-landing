import React from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'
import { UlList } from '@client-ui/ulList'

export const GpsMonitoringAndDispatchingFunctionalityWidgetView = ({
                                                                       title,
                                                                       functionalityList,
                                                                       advantages,
                                                                       tags,
                                                                   }: {
    title: string
    functionalityList: {
        image: string
        title: string
        description: string
    }[]
    advantages: {
        title: string
        list: string[]
    }
    tags: string[]
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
                    {functionalityList.map((functionality, index) => {
                        return (
                            <li
                                key={index}
                                className={styles.card}
                            >
                                <img
                                    src={functionality.image}
                                    alt={functionality.title}
                                    className={styles.cardImg}
                                />
                                
                                <h6
                                    className={styles.cardTitle}
                                >
                                    {functionality.title}
                                </h6>
                                
                                <p
                                    className={styles.cardDescription}
                                >
                                    {functionality.description}
                                </p>
                            </li>
                        )
                    })}
                </ul>
                
                <UlList
                    list={advantages.list}
                    title={advantages.title}
                    className={styles.advantages}
                    color={'white'}
                    textVariant={'secondary'}
                />
                
                <ul
                    className={styles.tags}
                >
                    {tags.map((tag, index) => {
                        return (
                            <li
                                key={index}
                                className={styles.tag}
                            >
                                {tag}
                            </li>
                        )
                    })}
                </ul>
            </Container>
        </section>
    )
}

