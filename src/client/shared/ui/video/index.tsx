import React from 'react'
import ReactPlayer from 'react-player'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'
import { PlayBtn } from '@client-ui/customButtons/playBtn'

export const Video = ({
                          video,
                          videoPreview,
                          className,
                      }: {
    video: string
    videoPreview: string
    className?: string
}) => {
    
    if (!video && videoPreview) {
        return (
            <div
                className={classNames(styles.root, className)}
            >
                <img
                    src={videoPreview}
                    alt="preview"
                    className={styles.videoPreview}
                    loading="lazy"
                />
            </div>
        )
    }
    return (
        <div
            className={classNames(styles.root, className)}
        >
            <ReactPlayer
                controls
                src={video}
                light={videoPreview && videoPreview !== '' ? videoPreview : true}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '24px',
                }}
                playIcon={<PlayBtn />}
            />
        </div>
    )
}

