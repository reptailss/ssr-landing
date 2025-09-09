import React from 'react'
import { NewsDto } from '@common/dto/newsDto'
import styles from './styles.module.css'
import { TextBtn } from '@client-ui/buttons/textBtn'
import { Link } from 'os-react-ssr-client'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { StringHelper } from '@client-utils/string/StringHelper'
import { classNames } from '@client-utils/classNames'
import { NewsRoutePathBuilder } from '@client-shared/widgets/news/routePathBuilder/NewsRoutePathBuilder'

export const NewsSmallCardLinkView = ({ newsDto, className }: {
    newsDto: NewsDto
    className?: string
}) => {
    
    const t = useTranslation()
    const href = NewsRoutePathBuilder.newsPost(newsDto.slug, newsDto.locale)
    
    return (
        <div
            className={classNames(styles.root, className)}
        >
            <Link
                href={href}
                target={'_blank'}
            >
                <img
                    src={newsDto.image}
                    alt={newsDto.title}
                    className={styles.img}
                />
            </Link>
            
            <h6
                className={styles.title}
            >
                {StringHelper.slice(newsDto.title, 50)}
            </h6>
            
            <TextBtn
                className={styles.link}
            >
                <Link
                    href={href}
                    target={'_blank'}
                >
                    {t('moreDetails')}
                </Link>
            </TextBtn>
        </div>
    )
}

