import React from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'
import { PrimaryBtn } from '@client-ui/buttons/primaryBtn'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { InnerHtml } from '@client-ui/innerHtml'

export const SmartSocietyGetPresentationWidgetView = ({
                                                          description,
                                                          presentation,
                                                      }: {
    description: string
    presentation: string
}) => {
    
    const t = useTranslation()
    
    return (
        <section
            className={styles.root}
        >
            <Container>
                <InnerHtml
                    className={styles.content}
                    html={description}
                />
                
                {presentation && <a
                    href={presentation}
                    download
                >
                    <PrimaryBtn>
                        {t('getPresentation')}
                    </PrimaryBtn>
                </a>}
            </Container>
        </section>
    )
}

