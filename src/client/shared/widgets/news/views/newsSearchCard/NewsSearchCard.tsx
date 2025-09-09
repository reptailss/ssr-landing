import React from 'react'
import { NewsDto } from '@common/dto/newsDto'

import styles from './styles.module.css'
import { Link } from 'os-react-ssr-client'
import { StringHelper } from '@client-utils/string/StringHelper'
import { NewsRoutePathBuilder } from '@client-shared/widgets/news/routePathBuilder/NewsRoutePathBuilder'
import { OnClickNewsSearchCard } from '@client-shared/widgets/news/types/events'

export const NewsSearchCard = ({
                                   newsDto,
                                   onClick,
                               }: {
    newsDto: NewsDto
    onClick?: OnClickNewsSearchCard
}) => {
    const href = NewsRoutePathBuilder.newsPost(newsDto.slug, newsDto.locale)
    return (
        <Link
            href={href}
            className={styles.root}
            onClick={onClick ? () => onClick(newsDto) : undefined}
        >
            {newsDto.image &&
                <div
                    className={styles.imageWrapper}
                >
                    <img
                        src={newsDto.image}
                        alt={newsDto.title}
                        className={styles.image}
                    />
                </div>
            }
            
            <div
                className={styles.content}
            >
                <div
                    className={styles.date}
                >
                    {new Date(newsDto.date_add).toLocaleDateString()}
                </div>
                <h3
                    className={styles.title}
                >
                    {StringHelper.slice(newsDto.title, 50)}
                </h3>
                
                <p
                    className={styles.description}
                >
                    {StringHelper.slice(StringHelper.stripHtmlTags(newsDto.content), 50)}
                </p>
            </div>
        </Link>
    )
}
