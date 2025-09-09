import React from 'react'
import styles from './styles.module.css'
import { Link } from 'os-react-ssr-client'
import { classNames } from '@client-utils/classNames'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'

export const Breadcrumbs = ({
                                breadcrumbs,
                            }: {
    breadcrumbs: BreadcrumbCard[]
}) => {
    
    const t = useTranslation()
    return (
        <div
            className={styles.root}
        >
            {breadcrumbs.map((item, i) => {
                if (!item.url) {
                    return (
                        <div
                            key={i}
                            className={classNames(styles.link, item.active && styles.active)}
                        >
                            {t(item.label)}
                        </div>
                    )
                }
                return (
                    <Link
                        key={i}
                        href={item.url}
                        className={classNames(styles.link, item.active && styles.active)}
                    >
                        {t(item.label)}
                    </Link>
                )
            })}
        </div>
    )
}

