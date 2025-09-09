import React from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'
import { SocialCard } from '@client-shared/widgets/social/types'
import { SocialWidgetView } from '@client-shared/widgets/social/views/SocialWidgetView'
import { ETicketPortalLinkWidgetView } from '@client-shared/widgets/eTicketPortalLink/views/ETicketPortalLinkWidgetView'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { SecondaryBtn } from '@client-ui/buttons/secondaryBtn'

export const FooterInfoView = ({
                                   showMap,
                                   social,
                                   eTicketPortal,
                                   onClickContactUs,
                               }: {
    showMap?: boolean
    social: {
        title: string
        socialList: SocialCard[]
    }
    eTicketPortal: {
        title: string
        link: string
        image: string
        mapImage: string
    }
    onClickContactUs: () => void
}) => {
    
    const t = useTranslation()
    
    if (!showMap) {
        return (
            <div
                className={styles.root}
            >
                <Container
                    className={styles.inner}
                >
                    <ETicketPortalLinkWidgetView
                        className={styles.eTicketPortalLink}
                        title={eTicketPortal.title}
                        link={eTicketPortal.link}
                        image={eTicketPortal.image}
                    />
                    
                    <SocialWidgetView
                        socialList={social.socialList}
                        title={social.title}
                    >
                        <SecondaryBtn
                            onClick={onClickContactUs}
                        >
                            {t('contactUs')}
                        </SecondaryBtn>
                    </SocialWidgetView>
                </Container>
            </div>
        )
    }
    
    return (
        <div
            className={styles.root}
        >
            <Container
                className={styles.container}
            >
                <div
                    className={styles.wrapper}
                >
                    <ETicketPortalLinkWidgetView
                        className={styles.ETicketPortalLink}
                        title={eTicketPortal.title}
                        link={eTicketPortal.link}
                        image={eTicketPortal.image}
                    />
                    
                    <SocialWidgetView
                        socialList={social.socialList}
                        title={social.title}
                    >
                        <SecondaryBtn
                            onClick={onClickContactUs}
                        >
                            {t('contactUs')}
                        </SecondaryBtn>
                    </SocialWidgetView>
                
                </div>
                
                {showMap && <img
                    src={eTicketPortal.mapImage}
                    alt={'map'}
                    className={styles.eTicketPortalMap}
                    loading={'lazy'}
                />}
            
            </Container>
        </div>
    )
}

