import React from 'react'

import { Link } from 'os-react-ssr-client'
import { TextBtn } from '@client-ui/buttons/textBtn'
import { OnClickProductCard, ProductCard } from '@client-shared/widgets/products/types'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { classNames } from '@client-utils/classNames'
import { NextBtn } from '@client-ui/customButtons/nextBtn'

import styles from './styles.module.css'

export const ProductCardView = ({
                                    productCard,
                                    onClickNextBtn,
                                    className,
                                    ElementType = 'div',
                                    isLink
                                }: {
    productCard: ProductCard
    onClickNextBtn?: OnClickProductCard
    className?: string
    ElementType?: 'div' | 'li'
    isLink?:boolean
}) => {
    
    const t = useTranslation()
    
    if(isLink){
        return (
            <Link
                href={productCard.link}
                className={classNames(styles.card, className)}
            >
                <img
                    src={productCard.desktopImage}
                    alt={'product-card'}
                    className={styles.desktopImage}
                    loading="lazy"
                />
                
                <img
                    src={productCard.mobileImage}
                    alt={'product-card'}
                    className={styles.mobileImage}
                    loading="lazy"
                />
                
                <div className={styles.overlay} />
                
                <div
                    className={styles.content}
                >
                    <h6
                        className={styles.title}
                    >
                        {productCard.description}
                    </h6>
                </div>
                
                <div
                    className={styles.actions}
                >
                     <TextBtn
                            className={styles.moreDetailsBtn}
                        >
                            {t('moreDetails')}
                            
                            <img
                                src={'/images/right-arrow.svg'}
                                alt={'next-arrow'}
                                loading="lazy"
                            />
                        </TextBtn>
                    
                    {onClickNextBtn && <NextBtn
                        onClick={() => onClickNextBtn(productCard)}
                        className={styles.nextSlideBtn}
                    />}
                </div>
            </Link>
        )
    }
    
    return (
        <ElementType
            className={classNames(styles.card, className)}
        >
            <img
                src={productCard.desktopImage}
                alt={'product-card'}
                className={styles.desktopImage}
                loading="lazy"
            />
            
            <img
                src={productCard.mobileImage}
                alt={'product-card'}
                className={styles.mobileImage}
                loading="lazy"
            />
            
            <div className={styles.overlay} />
            
            <div
                className={styles.content}
            >
                <h6
                    className={styles.title}
                >
                    {productCard.description}
                </h6>
            </div>
            
            <div
                className={styles.actions}
            >
                <Link
                    href={productCard.link}
                >
                    <TextBtn
                        className={styles.moreDetailsBtn}
                    >
                        {t('moreDetails')}
                        
                        <img
                            src={'/images/right-arrow.svg'}
                            alt={'next-arrow'}
                            loading="lazy"
                        />
                    </TextBtn>
                </Link>
                
                {onClickNextBtn && <NextBtn
                    onClick={() => onClickNextBtn(productCard)}
                    className={styles.nextSlideBtn}
                />}
            </div>
        </ElementType>
    )
    
}

