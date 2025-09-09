import React from 'react'
import { ProductCard } from '@client-shared/widgets/products/types'
import { Container } from '@client-ui/container'
import { ProductCardView } from '@client-shared/widgets/products/views/productCard/ProductCardView'
import styles from './styles.module.css'


export const ProductsPageProductsWidgetView = ({
                                                   productCards,
                                               }: {
    productCards: ProductCard[]
}) => {
    return (
        <section
            className={styles.root}
        >
            <Container
                className={styles.container}
                ElementType={'ul'}
            >
                {productCards.map((productCard, index) => {
                    return (
                        <ProductCardView
                            productCard={productCard}
                            key={index}
                            isLink
                        />
                    )
                })}
            </Container>
        </section>
    )
}

