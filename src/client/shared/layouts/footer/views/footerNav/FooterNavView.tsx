import React from 'react'
import { Link } from 'os-react-ssr-client'
import { useTranslation } from '@client-shared/translations/useTranslation'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'
import { FooterNavItem } from '@client-shared/layouts/footer/types'


export const FooterNavView = ({
                                  nav,
                                  className,
                              }: {
    nav: FooterNavItem[]
    className?: string
}) => {
    
    const t = useTranslation()
    
    return (
        <nav
            className={classNames(styles.nav, className)}
        >
            {
                nav.map((nav) => {
                    return (
                        <Link
                            className={styles.link}
                            key={nav.href}
                            href={nav.href}
                        >
                            {t(nav.key)}
                        </Link>
                    )
                })
            }
        </nav>
    )
}
