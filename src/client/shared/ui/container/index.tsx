import React, { ReactNode } from 'react'
import { classNames } from '@client-utils/classNames'
import styles from './styles.module.css'

export const Container = ({
                              children,
                              className,
                              ElementType = 'div',
                          }: {
    children: ReactNode
    className?: string
    ElementType?: 'nav' | 'div' | 'section' | 'header' | 'footer' | 'ul'
}) => {
    
    return (
        <ElementType
            className={classNames(styles.root, className)}
        >
            {children}
        </ElementType>
    )
}
