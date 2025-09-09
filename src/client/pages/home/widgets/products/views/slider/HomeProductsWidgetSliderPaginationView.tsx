import React, { Fragment } from 'react'
import { HomeProductCard } from '@client-pages/home/widgets/products/types'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'

export const HomeProductsWidgetSliderPaginationView = ({
                                                           productCards,
                                                           activeIndex,
                                                           onClickProductCard,
                                                       }: {
    activeIndex: number
    productCards: HomeProductCard[]
    onClickProductCard: (homeProductCard: HomeProductCard,index:number) => void
}) => {
    
    return (
        <>
            <div
                className={styles.pagination}
            >
                {productCards.map((
                    productCard,
                    index,
                ) => {
                    const isActive = activeIndex === index
                    return (
                        <Fragment
                            key={index}
                        >
                            <div
                                className={classNames(
                                    styles.paginationIndicator,
                                    isActive && styles.paginationIndicatorActive,
                                    styles.paginationElementMobile,
                                )}
                            />
                            
                            <div
                                className={classNames(
                                    styles.paginationElementDesktop,
                                )}
                            >
                                <div
                                    key={index}
                                    className={classNames(
                                        styles.paginationIndicator,
                                        styles.paginationIndicatorDesktop,
                                        isActive && styles.paginationIndicatorActive,
                                    )}
                                />
                                
                                <button
                                    className={classNames(
                                        styles.title,
                                        styles.desktopTitle,
                                        isActive && styles.titleActive,
                                    )}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        onClickProductCard(productCard,index)
                                    }}
                                >
                                    {productCard.title}
                                </button>
                            </div>
                        </Fragment>
                    )
                })}
            </div>
            
            <h6
                className={classNames(styles.title, styles.titleActive, styles.mobileTitle)}
            >
                {productCards[activeIndex]?.title}
            </h6>
        </>
    )
}

