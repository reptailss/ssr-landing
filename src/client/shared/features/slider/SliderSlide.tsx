import React, { ReactNode } from 'react'
import { classNames } from '@client-utils/classNames'


export const SliderSlide = ({
                                children,
                                className,
                                ElementType = 'div',
                            }: {
    children: ReactNode
    className?: string
    ElementType?: 'div' | 'li'
}) => {
    return (
        <ElementType
            className={classNames('swiper-slide', className)}
        >
            {children}
        </ElementType>
    )
}

