import React from 'react'
import { ClientPaperCard, ClientPaperCardChildren } from '@common/clientWidgets/clientPaperWidget'
import styles from './styles.module.css'
import { UlList } from '@client-ui/ulList'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { Container } from '@client-ui/container'
import { classNames } from '@client-utils/classNames'
import { InnerHtml } from '@client-ui/innerHtml'

const PaperWidgetCardChildren = ({
                                     content,
                                 }: {
    content: ClientPaperCardChildren
}) => {
    const t = useTranslation()
    
    switch (content.type) {
        case 'client-paper-card-editor':
            return (
                <InnerHtml
                    html={content.content}
                    className={styles.content}
                />
            )
        case 'client-paper-card-ul':
            return (
                <div
                    className={styles.cardUl}
                >
                    <UlList
                        list={content.list}
                        color={'black'}
                    />
                    
                    {content.advantages.length >= 1 && <UlList
                        list={content.advantages}
                        title={`${t('advantages')}:`}
                        color={'black'}
                        textVariant={'secondary'}
                    />}
                </div>
            )
        default :
            return null
    }
}

export const PaperWidgetCardView = ({
                                        paperCard,
                                        disableFirstBorderRadius,
                                    }: {
    paperCard: ClientPaperCard
    disableFirstBorderRadius: boolean
}) => {
    return (
        <div
            className={classNames(styles.root, disableFirstBorderRadius && styles.disableFirstBorderRadius)}
        >
            <Container
                className={styles.card}
            >
                <img
                    src={paperCard.image}
                    alt={paperCard.title}
                    className={styles.cardImg}
                />
                
                <div
                    className={styles.cardContentWrapper}
                >
                    {paperCard.title && <h6
                        className={styles.cardTitle}
                    >
                        {paperCard.title}
                    </h6>}
                    
                    {paperCard.subtitle && <p
                        className={styles.cardSubtitle}
                    >
                        {paperCard.subtitle}
                    </p>}
                    
                    <PaperWidgetCardChildren
                        content={paperCard.children}
                    />
                </div>
            </Container>
        </div>
    )
}

