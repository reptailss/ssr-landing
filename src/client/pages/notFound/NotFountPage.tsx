import React from 'react'
import { Link } from 'os-react-ssr-client'
import { FooterExpanded } from '@client-shared/layouts/footer/FooterExpanded'
import styles from './styles.module.css'
import { Header } from '@client-shared/layouts/header/Header'
import { useTranslation } from '@client-shared/translations/useTranslation'


export const NotFountPage = () => {
    const t = useTranslation()
    return (
        <>
            <Header />
            
            <div className={styles.root}>
                <div
                    className={styles.content}
                >
                    <h1 className={styles.code}>404</h1>
                    
                    <p className={styles.message}>{t('pageNotFound')}</p>
                    
                    <Link
                        href="/"
                        className={styles.button}
                    >
                        {t('toHome')}
                    </Link>
                </div>
            </div>
            
            <FooterExpanded showMap />
        </>
    )
}

