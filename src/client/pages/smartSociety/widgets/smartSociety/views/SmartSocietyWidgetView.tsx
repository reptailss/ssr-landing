import React from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'
import { PrimaryBtn } from '@client-ui/buttons/primaryBtn'
import { useTranslation } from '@client-shared/translations/useTranslation'

export const SmartSocietyWidgetView = ({
                                           title,
                                           description,
                                           banner,
                                           presentation,
                                       }: {
    title: string
    description: string
    banner: {
        icons: string[]
        title: string
        image: string
    }
    presentation: string
}) => {
    
    const t = useTranslation()
    
    return (
        <section
            className={styles.root}
        >
            <Container>
                <div
                    className={styles.wrapper}
                >
                    <h3
                        className={styles.title}
                    >
                        {title}
                    </h3>
                    
                    <p
                        className={styles.description}
                    >
                        {description}
                    </p>
                    
                    {presentation && <a
                        href={presentation}
                        download
                    >
                        <PrimaryBtn>
                            {t('getPresentation')}
                        </PrimaryBtn>
                    </a>}
                </div>
                <div
                    className={styles.inner}
                >
                    <div
                        className={styles.icons}
                    >
                        {banner.icons.map((icon, index) => {
                            return (
                                <div
                                    className={styles.iconWrapper}
                                    key={index}
                                >
                                    <img
                                        src={icon}
                                        className={styles.icon}
                                        alt={'icon'}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    
                    <h6
                        className={styles.bannerTitle}
                    >
                        {banner.title}
                    </h6>
                    
                    <img
                        src={banner.image}
                        alt={banner.title}
                        className={styles.bannerImg}
                    />
                </div>
            </Container>
        </section>
    )
}

