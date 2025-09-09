import React from 'react'
import { Container } from '@client-ui/container'
import styles from './styles.module.css'
import { ETicketPortalLinkWidgetView } from '@client-shared/widgets/eTicketPortalLink/views/ETicketPortalLinkWidgetView'
import { useServerDeviceType } from 'os-react-ssr-client'

export const ETicketHeroWidgetView = ({
                                          title,
                                          description,
                                          image,
                                          eTicketPortal,
                                      }: {
    title: string
    description: string
    image: string
    eTicketPortal: {
        title: string
        link: string
        image: string
    }
}) => {
    
    const { isMobile } = useServerDeviceType()
    return (
        <section
            className={styles.root}
        >
            <Container
                ElementType={'section'}
                className={styles.container}
            >
                <div>
                    <h1
                        className={styles.title}
                    >
                        {title}
                    </h1>
                    
                    <h2
                        className={styles.description}
                    >
                        {description}
                    </h2>
                    
                    {!isMobile && <ETicketPortalLinkWidgetView
                        title={eTicketPortal.title}
                        link={eTicketPortal.link}
                        image={eTicketPortal.image}
                        className={styles.eTicketPortalDesktop}
                    />}
                </div>
                
                <img
                    src={image}
                    alt={'hero'}
                    className={styles.img}
                />
                
                {isMobile && <ETicketPortalLinkWidgetView
                    title={eTicketPortal.title}
                    link={eTicketPortal.link}
                    image={eTicketPortal.image}
                    className={styles.eTicketPortalMobile}
                />}
            </Container>
        </section>
    )
}

