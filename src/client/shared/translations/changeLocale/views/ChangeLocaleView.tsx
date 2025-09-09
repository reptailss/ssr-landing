import React, { Fragment } from 'react'
import { useLocale, useLocales } from 'os-react-ssr-client'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'
export const ChangeLocaleView = ({
                                     onChange,
                                     className,
                                 }: {
    onChange: (locale: string) => void
    className?: string
}) => {
    
    const locales = useLocales()
    const targetLocale = useLocale()
    if (locales.length === 1) {
        return null
    }
    
    return (
        <>
            {locales.map((locale) => {
                if (targetLocale && targetLocale === locale) {
                    return (
                        <Fragment
                            key={locale}
                        />
                    )
                }
                return (
                    <a
                        className={classNames(styles.languageLink,className)}
                        href={`/${locale}`}
                        onClick={(e) => {
                            e.preventDefault()
                            onChange(locale)
                        }}
                        key={locale}
                    >
                        {locale}
                    </a>
                )
            })}
        </>
    )
}

