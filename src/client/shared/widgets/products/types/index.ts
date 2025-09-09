export type ProductCard = {
    description: string
    desktopImage: string
    mobileImage: string
    link: string
}

export type OnClickProductCard = (productCard:ProductCard)=>void