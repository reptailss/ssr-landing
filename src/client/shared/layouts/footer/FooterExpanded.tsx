import React from 'react'
import { FOOTER_NAV } from '@client-shared/layouts/footer/constants/footerNav'
import { FooterView } from '@client-shared/layouts/footer/views/footer/FooterView'
import { FooterInfoView } from '@client-shared/layouts/footer/views/footerInfo/FooterInfoView'
import { useClientSharedData } from '@client-shared/sharedData/useClientSharedData'
import { useOpenGlobalContactUsFn } from '@client-shared/widgets/globalContactUs/useOpenGlobalContactUsFn'

export const FooterExpanded = ({
                                   showMap
                               }:{
    showMap?:boolean
}) => {
    
    const sharedContent = useClientSharedData()
    const openGlobalContactUsFn = useOpenGlobalContactUsFn()
    
    return (
        <>
            <FooterView
                nav={FOOTER_NAV}
            >
                <FooterInfoView
                    social={sharedContent.socialWidget}
                    eTicketPortal={sharedContent.eTicketPortalWidget}
                    onClickContactUs={openGlobalContactUsFn}
                    showMap={showMap}
                />
            </FooterView>
        </>
    )
}

