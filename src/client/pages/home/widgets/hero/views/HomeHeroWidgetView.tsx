import React from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { PrimaryBtn } from '@client-ui/buttons/primaryBtn'
import { HomePageContent } from '@common/pagesContent/home'


export const HomeHeroWidgetView = ({
                                       content,
                                       onClickContactUs,
                                   }: {
    content: HomePageContent['heroWidget']
    onClickContactUs: () => void
}) => {
    
    const t = useTranslation()
    
    return (
        <section
            className={styles.root}
        >
            <div className={styles.bg} />
            
            <img
                src={'/images/home-hero-bg.jpg'}
                className={styles.img}
                alt={'hero'}
            />
            
            <Container
                className={styles.container}
            >
                <h2 className={styles.subtitle}>{content.subtitle}</h2>
                <h1 className={styles.title}>{content.title}</h1>
                <h4 className={styles.description}>{content.description}</h4>
                
                <PrimaryBtn
                    onClick={onClickContactUs}
                    className={styles.contactUsBtn}
                >
                    {t('contactUs')}
                </PrimaryBtn>
            </Container>
        </section>
    )
}
