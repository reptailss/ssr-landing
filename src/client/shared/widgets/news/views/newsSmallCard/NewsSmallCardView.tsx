import React from 'react'
import { NewsDto } from '@common/dto/newsDto'
import styles from './styles.module.css'
import { TextBtn } from '@client-ui/buttons/textBtn'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { StringHelper } from '@client-utils/string/StringHelper'
import { classNames } from '@client-utils/classNames'

export const NewsSmallCardView = ({
                                      newsDto,
                                      onClick,
                                      className,
                                      href,
                                  }: {
    newsDto: NewsDto
    className?: string
    onClick: (newsDto: NewsDto) => void
    href?: string
}) => {
    
    const t = useTranslation()
    
    if (href) {
        return (
            <div
                className={classNames(styles.root, className)}
            >
                <a
                    href={href}
                    onClick={(e) => {
                        e.preventDefault()
                        onClick(newsDto)
                    }}
                >
                    <img
                        src={newsDto.image}
                        alt={newsDto.title}
                        className={styles.img}
                    
                    />
                </a>
                
                <h6
                    className={styles.title}
                >
                    {StringHelper.slice(newsDto.title, 50)}
                </h6>
                
                <a
                    onClick={(e) => {
                        e.preventDefault()
                        onClick(newsDto)
                    }}
                    href={href}
                >
                    <TextBtn
                        className={styles.link}
                    >
                        {t('moreDetails')}
                    </TextBtn>
                </a>
            </div>
        )
    }
    return (
        <div
            className={classNames(styles.root, className)}
        >
            <img
                src={newsDto.image}
                alt={newsDto.title}
                className={styles.img}
                onClick={() => onClick(newsDto)}
            />
            
            <h6
                className={styles.title}
            >
                {StringHelper.slice(newsDto.title, 50)}
            </h6>
            
            <TextBtn
                className={styles.link}
                onClick={() => onClick(newsDto)}
            >
                {t('moreDetails')}
            </TextBtn>
        </div>
    )
}

