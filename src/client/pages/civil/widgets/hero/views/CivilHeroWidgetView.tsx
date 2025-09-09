import React from 'react'
import { Container } from '@client-ui/container'
import styles from './styles.module.css'
import { Video } from '@client-ui/video'
import { InnerHtml } from '@client-ui/innerHtml'

export const CivilHeroWidgetView = ({
                                               title,
                                               description,
                                               video,
                                               videoPreview,
                                           }: {
    title: string
    description: string
    video: string
    videoPreview: string
}) => {
    return (
        <section
            className={styles.root}
        >
            <Container
                ElementType={'section'}
                className={styles.container}
            >
                <div
                    className={styles.content}
                >
                    <h1
                        className={styles.title}
                    >
                        {title}
                    </h1>
                    
                    <InnerHtml
                        className={styles.description}
                        html={description}
                    />
                </div>
                
                <Video
                    video={video}
                    videoPreview={videoPreview}
                    className={styles.video}
                />
            </Container>
        </section>
    )
}

