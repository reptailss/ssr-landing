import React from 'react'
import { classNames } from '@client-utils/classNames'
import styles from './styles.module.css'
import { PlayBtn } from '@client-ui/customButtons/playBtn'

export const ETicketPortalLinkWidgetView = ({
                                                className,
                                                title,
                                                link,
                                                image,
                                            }: {
    className?: string
    title: string
    link: string
    image: string
}) => {
    return (
        <div
            className={classNames(styles.root, className)}
        >
            <a
                className={styles.banner}
                href={link}
            >
                <img
                    src={image}
                    alt="banner"
                    className={styles.image}
                />
                
                <PlayBtn />
            </a>
            
            <h6
                className={styles.title}
            >
                {`${title} `}
                <a
                    target={'_blank'}
                    className={styles.link}
                    href={link}
                >
                    {link?.replace('http://', '')?.replace('https://', '')}
                </a>
            </h6>
        </div>
    )
}

