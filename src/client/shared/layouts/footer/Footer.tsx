import React from 'react'
import { FooterView } from '@client-shared/layouts/footer/views/footer/FooterView'
import { FOOTER_NAV } from '@client-shared/layouts/footer/constants/footerNav'

export const Footer = () => {
    return (
        <>
            <FooterView
                nav={FOOTER_NAV}
            />
        </>
    )
}

