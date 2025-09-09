import React, { useCallback, useState } from 'react'
import { useChangeLocale, useServerDeviceType } from 'os-react-ssr-client'
import { useOpenGlobalContactUsFn } from '@client-shared/widgets/globalContactUs/useOpenGlobalContactUsFn'
import { useOpenGlobalSearchFn } from '@client-shared/widgets/globalSearch/useOpenGlobalSearchFn'
import { HeaderView } from '@client-shared/layouts/header/views/header/HeaderView'
import { HEADER_NAV } from '@client-shared/layouts/header/constants/headerNav'
import { HeaderMobileNavView } from '@client-shared/layouts/header/views/mobileNav/HeaderMobileNavView'
import { MOBILE_HEADER_NAV } from '@client-shared/layouts/header/constants/mobileHeaderNav'
import { BodyHelper } from '@client-utils/body/BodyHelper'

export const Header = ({
                           hasDesktopPositionAbsolute,
                           hasDesktopBgTransparent,
                       }: {
    hasDesktopPositionAbsolute?: boolean
    hasDesktopBgTransparent?: boolean
}) => {
    const [openMobileNav, setOpenMobileNav] = useState<boolean>(false)
    
    const changeLocale = useChangeLocale()
    const openGlobalContactUsFn = useOpenGlobalContactUsFn()
    const openGlobalSearchFn = useOpenGlobalSearchFn()
    const deviceType = useServerDeviceType()
    const onClickBurger = useCallback(() => {
        setOpenMobileNav((prev) => {
            const newValue = !prev
            if (!newValue) {
                BodyHelper.unlockScroll()
            } else {
                BodyHelper.lockScroll()
            }
            return newValue
        })
    }, [])
    
    const onCloseMobileNav = useCallback(() => {
        setOpenMobileNav(false)
        BodyHelper.unlockScroll()
    }, [])
    
    const onChangeLocaleMobile = useCallback((locale: string) => {
        changeLocale(locale, {
            refreshGlobalData: true,
        })
        onCloseMobileNav()
    }, [changeLocale])
    
    const changeLocaleDesktop = useCallback((locale: string) => {
        changeLocale(locale, {
            refreshGlobalData: true,
        })
    }, [changeLocale])
    
    return (
        <>
            <HeaderView
                headerNavList={HEADER_NAV}
                onClickContactUs={openGlobalContactUsFn}
                onClickBurger={onClickBurger}
                onClickSearch={openGlobalSearchFn}
                onChangeLocale={changeLocaleDesktop}
                hasDesktopPositionAbsolute={hasDesktopPositionAbsolute}
                hasDesktopBgTransparent={hasDesktopBgTransparent}
            />
            
            {deviceType.isMobile && <HeaderMobileNavView
                open={openMobileNav}
                onClickNav={onCloseMobileNav}
                onClickOverlay={onCloseMobileNav}
                nav={MOBILE_HEADER_NAV}
                onChangeLocale={onChangeLocaleMobile}
            />}
        </>
    )
}

