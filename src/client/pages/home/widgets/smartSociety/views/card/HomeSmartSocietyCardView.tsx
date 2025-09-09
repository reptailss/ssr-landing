import React from 'react'
import { HomeSmartSocietyCard } from '@client-pages/home/widgets/smartSociety/types'
import styles from './styles.module.css'
import { NextBtn } from '@client-ui/customButtons/nextBtn'

export const HomeSmartSocietyCardView = ({
                                             card,
                                             onClickNextBtn,
                                         }: {
    card: HomeSmartSocietyCard
    onClickNextBtn: () => void
}) => {
    return (
        <div
            className={styles.root}
        >
            <div
                className={styles.info}
            >
                <h6 className={styles.title}>
                    {card.title}
                </h6>
                
                <p
                    className={styles.subtitle}
                >
                    {card.subtitle}
                </p>
                
                <NextBtn
                    className={styles.nextBtn}
                    onClick={onClickNextBtn}
                />
            </div>
            
            <img
                src={card.image}
                className={styles.img}
                alt={card.title}
                loading="lazy"
            />
        </div>
    )
}

