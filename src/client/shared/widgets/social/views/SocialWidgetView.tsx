import React, { ReactNode } from 'react'
import { classNames } from '@client-utils/classNames'
import { SocialCard } from '@client-shared/widgets/social/types'
import styles from './styles.module.css'

export const SocialWidgetView = ({
                                     className,
                                     title,
                                     socialList,
                                     children,
                                 }: {
    className?: string
    title: string
    socialList: SocialCard[]
    children?: ReactNode
}) => {
    return (
        <div
            className={classNames(styles.root, className)}
        >
            <p
                className={styles.title}
            >
                {title} :
            </p>
            
            <div
                className={styles.socialList}
            >
                {children && children} {socialList.map((social) => {
                return (
                    <a
                        href={social.link}
                        target={'_blank'}
                        key={social.link}
                    >
                        <img
                            src={social.image}
                            alt={'social'}
                            className={styles.image}
                        />
                    </a>
                )
            })}
            </div>
        </div>
    )
}

