import React from 'react'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { Link } from 'os-react-ssr-client'
import { classNames } from '@client-utils/classNames'
import styles from './styles.module.css'
import { HeaderNavItem } from '@client-shared/layouts/header/types'
import { ChangeLocaleView } from '@client-shared/translations/changeLocale/views/ChangeLocaleView'

export const HeaderMobileNavView = ({
                                        nav,
                                        className,
                                        onClickNav,
                                        onClickOverlay,
                                        open,
                                        onChangeLocale,
                                    }: {
    nav: HeaderNavItem[]
    className?: string
    onClickNav: () => void
    onClickOverlay: () => void
    open: boolean
    onChangeLocale: (locale: string) => void
}) => {
    const t = useTranslation()
    
    return (
        <div
            className={classNames(styles.overlay, open && 'open')}
            onClick={onClickOverlay}
        >
            <div
                className={classNames(styles.nav, className)}
                onClick={(e) => e.stopPropagation()}
            >
                <ChangeLocaleView
                    onChange={onChangeLocale}
                    className={styles.language}
                />
                
                {
                    nav.map((nav) => {
                        return (
                            <Link
                                className={styles.link}
                                key={nav.href}
                                href={nav.href}
                                onClick={onClickNav}
                            >
                                {t(nav.key)}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

