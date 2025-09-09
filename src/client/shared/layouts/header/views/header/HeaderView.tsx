import React from 'react'
import styles from './styles.module.css'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { PrimaryBtn } from '@client-ui/buttons/primaryBtn'
import { HeaderNavItem } from '@client-shared/layouts/header/types'
import { classNames } from '@client-utils/classNames'
import { IconBtn } from '@client-ui/buttons/iconBtn'
import { Container } from '@client-ui/container'
import { GisLogo } from '@client-ui/logo/gisLogo'
import { HeaderNavView } from '@client-shared/layouts/header/views/headerNav/HeaderNavView'
import { ChangeLocaleView } from '@client-shared/translations/changeLocale/views/ChangeLocaleView'
import { Link } from 'os-react-ssr-client'


export const HeaderView = ({
                               headerNavList,
                               onClickContactUs,
                               onClickBurger,
                               onClickSearch,
                               onChangeLocale,
                               className,
                               hasDesktopPositionAbsolute,
                               hasDesktopBgTransparent,
                           }: {
    headerNavList: HeaderNavItem[]
    onClickContactUs: () => void
    onClickBurger: () => void
    onClickSearch: () => void
    onChangeLocale: (locale: string) => void
    className?: string
    hasDesktopPositionAbsolute?: boolean
    hasDesktopBgTransparent?: boolean
}) => {
    
    const t = useTranslation()
    return (
        <>
            <header
                className={
                    classNames('os-header',
                        styles.header,
                        hasDesktopPositionAbsolute && styles.desktopPositionAbsolute,
                        hasDesktopBgTransparent && styles.desktopBgTransparent,
                        className)
                }
            >
                <Container
                    className={styles.container}
                >
                    <IconBtn
                        onClick={onClickBurger}
                        className={styles.burger}
                    >
                        <span className={styles.burgerElement} />
                        <span className={styles.burgerElement} />
                        <span className={styles.burgerElement} />
                    </IconBtn>
                    
                    <Link
                        href={'/'}
                        className={styles.logoLink}
                    >
                        <GisLogo />
                    </Link>
                    
                    <HeaderNavView
                        nav={headerNavList}
                        className={styles.nav}
                        hasDesktopBgTransparent={hasDesktopBgTransparent}
                    />
                    
                    <ChangeLocaleView
                        onChange={onChangeLocale}
                        className={styles.language}
                    />
                    
                    <PrimaryBtn
                        onClick={onClickContactUs}
                        className={styles.contactUsBtn}
                    >
                        {t('contactUs')}
                    </PrimaryBtn>
                    
                    <IconBtn
                        onClick={onClickSearch}
                        className={styles.searchBtn}
                    >
                        <img
                            src={'/images/search-icon.png'}
                            alt={'searchIcon'}
                            className={styles.searchIcon}
                            loading="lazy"
                        />
                    </IconBtn>
                </Container>
            
            </header>
            <div className={styles.headerGap} />
        </>
    )
}
