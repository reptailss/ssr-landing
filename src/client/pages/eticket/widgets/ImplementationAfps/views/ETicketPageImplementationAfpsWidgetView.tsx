import React from 'react'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'
import { PrimaryBtn } from '@client-ui/buttons/primaryBtn'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { InnerHtml } from '@client-ui/innerHtml'

export const ETicketPageImplementationAfpsWidgetView = ({
                                                            content,
                                                            onClickContactUs,
                                                        }: {
    content: string
    onClickContactUs: () => void
}) => {
    const t = useTranslation()
    
    return (
        <section
            className={styles.root}
        >
            <Container>
                <InnerHtml
                    className={styles.content}
                    html={content}
                />
                
                <div
                    className={styles.contactUsInner}
                >
                    <PrimaryBtn
                        onClick={onClickContactUs}
                    >
                        {t('contactUs')}
                    </PrimaryBtn>
                </div>
            </Container>
        </section>
    )
}

