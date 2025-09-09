import React from 'react'
import { NewsSmallCardLinkView } from '@client-shared/widgets/news/views/newsSmallCard/NewsSmallCardLinkView'
import { NewsDto } from '@common/dto/newsDto'
import { SliderContainer } from '@client-shared/features/slider/SliderContainer'
import { SliderSlide } from '@client-shared/features/slider/SliderSlide'
import styles from '@client-pages/home/widgets/news/views/styles.module.css'
import { useServerDeviceType } from 'os-react-ssr-client'

export const HomeNewsWidgetListView = ({
                                           newsDtoList,
                                       }: {
    newsDtoList: NewsDto[]
}) => {
    
    const serverDeviceType = useServerDeviceType()
    
    if(serverDeviceType.isMobile){
        return (
            <SliderContainer
                slidesPerView={1}
                speed={400}
                spaceBetween={30}
            >
                {
                    newsDtoList.map((newsDto) => {
                        return (
                            <SliderSlide
                                key={newsDto.id}
                            >
                                <NewsSmallCardLinkView
                                    newsDto={newsDto}
                                />
                            </SliderSlide>
                        )
                    })
                }
            </SliderContainer>
        )
    }
    
    
    return (
        <div
            className={styles.list}
        >
            {newsDtoList.map((newsDto) => {
                return (
                    <NewsSmallCardLinkView
                        newsDto={newsDto}
                        key={newsDto.id}
                        className={styles.card}
                    />
                )
            })}
        </div>
    )
}

