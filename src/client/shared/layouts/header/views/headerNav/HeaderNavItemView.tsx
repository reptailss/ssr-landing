import React from 'react'
import { HeaderNavItem } from '@client-shared/layouts/header/types'
import styles from './styles.module.css'
import { Link } from 'os-react-ssr-client'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { HeaderNavItemDropdownView } from '@client-shared/layouts/header/views/headerNav/HeaderNavItemDropdownView'

export const HeaderNavItemView = ({
                                      headerNavItem,
                                      hasDesktopBgTransparent,
                                  }: {
    headerNavItem: HeaderNavItem
    hasDesktopBgTransparent?: boolean
}) => {
    
    const t = useTranslation()
    
    if (headerNavItem.children.length >= 1) {
        return (
            <HeaderNavItemDropdownView
                headerNavItem={headerNavItem}
                hasDesktopBgTransparent={hasDesktopBgTransparent}
            />
        )
    }
    
    return (
        <Link
            className={styles.item}
            key={headerNavItem.href}
            href={headerNavItem.href}
        >
            {t(headerNavItem.key)}
        </Link>
    )
}

