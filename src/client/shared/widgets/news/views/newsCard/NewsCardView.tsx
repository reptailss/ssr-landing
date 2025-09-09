import React from 'react'
import { NewsDto } from '@common/dto/newsDto'
import styles from './styles.module.css'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { StringHelper } from '@client-utils/string/StringHelper'
import { classNames } from '@client-utils/classNames'
import { InnerHtml } from '@client-ui/innerHtml'

export const NewsCardView = ({
                                 newsDto,
                                 className,
                             }: {
    newsDto: NewsDto
    className?: string
}) => {
    
    return (
        <div
            className={classNames(styles.root, className)}
        >
            <img
                src={newsDto.image}
                alt={newsDto.title}
                className={styles.img}
            />
            
            <div
                className={styles.inner}
            >
                <h6
                    className={styles.title}
                >
                    {newsDto.title}
                </h6>
                
                <p
                    className={styles.date}
                >
                    {new Date(newsDto.date_add).toLocaleDateString()}
                </p>
                
                <InnerHtml
                    html={newsDto.content}
                    className={styles.content}
                />
            </div>
        </div>
    )
}

