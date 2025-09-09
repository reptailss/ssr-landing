import React from 'react'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'
import { HeaderNavItem } from '@client-shared/layouts/header/types'
import { HeaderNavItemView } from '@client-shared/layouts/header/views/headerNav/HeaderNavItemView'

export const HeaderNavView = ({
                                  nav,
                                  className,
                                  hasDesktopBgTransparent,
                              }: {
    nav: HeaderNavItem[]
    className?: string
    hasDesktopBgTransparent?: boolean
}) => {
    
    return (
        <nav
            className={classNames(styles.nav, className)}
        >
            {
                nav.map((headerNavItem) => {
                    return (
                        <HeaderNavItemView
                            headerNavItem={headerNavItem}
                            key={headerNavItem.href}
                            hasDesktopBgTransparent={hasDesktopBgTransparent}
                        />
                    
                    )
                })
            }
        </nav>
    )
}
