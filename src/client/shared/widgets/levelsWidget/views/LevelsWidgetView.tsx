import React from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'
import { LevelsWidgetCard } from '@client-shared/widgets/levelsWidget/types'

export const LevelsWidgetView = ({
                                              title,
                                              levels,
                                          }: {
    title: string
    levels: LevelsWidgetCard[]
}) => {
    return (
        <section
            className={styles.root}
        >
            <Container>
                <div className={styles.wrapper}>
                    <h2
                        className={styles.title}
                    >
                        {title}
                    </h2>
                    
                    {levels.length >= 1 && levels.map((level, index) => {
                        return (
                            <div
                                key={index}
                                className={styles.level}
                            >
                                <h3
                                    className={styles.levelTitle}
                                >
                                    {level.title}
                                </h3>
                                <div className={styles.row}>
                                    {level.items.length >= 1 && level.items.map((item, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className={styles.box}
                                            >
                                                <img
                                                    src={item.icon}
                                                    alt={item.label}
                                                    className={styles.icon}
                                                />
                                                <span>{item.label}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}

