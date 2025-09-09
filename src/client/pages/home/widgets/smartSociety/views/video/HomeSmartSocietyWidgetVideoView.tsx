import React from 'react'
import styles from './styles.module.css'
import { Video } from '@client-ui/video'

export const HomeSmartSocietyWidgetVideoView = ({
                                                    video,
                                                    videoPreview,
                                                    description,
                                                }: {
    video: string
    videoPreview: string
    description: string
}) => {
    return (
        <div
            className={styles.root}
        >
            <p
                className={styles.description}
            >
                {description}
            </p>
            
            <Video
                video={video}
                videoPreview={videoPreview}
                className={styles.video}
            />
        </div>
    )
}

