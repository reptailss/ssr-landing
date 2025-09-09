import React, { ReactNode } from 'react'
import styles from './styles.module.css'
import { GisLogo } from '@client-ui/logo/gisLogo'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { FooterNavView } from '@client-shared/layouts/footer/views/footerNav/FooterNavView'
import { FooterNavItem } from '@client-shared/layouts/footer/types'
import { Container } from '@client-ui/container'
import { Link } from 'os-react-ssr-client'

export const FooterView = ({
                               nav,
                               children,
                           }: {
    nav: FooterNavItem[]
    children?: ReactNode
}) => {
    
    const t = useTranslation()
    
    return (
        <footer
            className={styles.root}
        >
            {children}
            
            <Container>
                
                <div
                    className={styles.inner}
                >
                    <Link href="/">
                        <GisLogo />
                    </Link>
                    
                    <h6
                        className={styles.title}
                    >
                        {t('gtfsOnlyCompanyUkraine')}
                    </h6>
                    
                    <FooterNavView
                        nav={nav}
                        className={styles.nav}
                    />
                    
                    <div
                        className={styles.copy}
                    >
                        © {new Date().getFullYear()} UA-GIS. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </Container>
        </footer>
    )
}
