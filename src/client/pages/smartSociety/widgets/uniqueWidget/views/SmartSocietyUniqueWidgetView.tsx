import React from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'
import { UlList } from '@client-ui/ulList'

export const SmartSocietyUniqueWidgetView = ({
                                                 title,
                                                 list,
                                             }: {
    title: string
    list: Array<
        {
            type: 'image'
            image: string
            desktopCol: number
        } |
        {
            type: 'card'
            title: string
            list: string[]
            desktopCol: number
        }
    >
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
                    className={styles.grid}
                >
                    {list.map((item, index) => {
                        switch (item.type) {
                            case 'card':
                                return (
                                    <div
                                        key={index}
                                        className={styles.card}
                                        style={{ gridColumn: `span ${item.desktopCol}` }}
                                    >
                                        <h6
                                            className={styles.cardTitle}
                                        >
                                            {item.title}
                                        </h6>
                                        
                                        <UlList
                                            list={item.list}
                                            listClassName={styles.ulList}
                                        />
                                    </div>
                                )
                            case 'image':
                                return (
                                    <img
                                        alt={'img'}
                                        src={item.image}
                                        key={index}
                                        className={styles.cardImg}
                                        style={{ gridColumn: `span ${item.desktopCol}` }}
                                    />
                                )
                            default:
                                return null
                        }
                    })}
                </ul>
            
            </Container>
        </section>
    )
}

