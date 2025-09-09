import React, { RefObject } from 'react'
import { HomeSmartSocietyCard } from '@client-pages/home/widgets/smartSociety/types'
import { SliderContainer } from '@client-shared/features/slider/SliderContainer'
import { SliderAutoPlayConfig } from '@client-shared/features/slider/types'
import { SliderSlide } from '@client-shared/features/slider/SliderSlide'
import { HomeSmartSocietyCardView } from '@client-pages/home/widgets/smartSociety/views/card/HomeSmartSocietyCardView'
import { ISlider } from '@client-shared/features/slider/interfaces'

const AUTO_PLAY_CONFIG: SliderAutoPlayConfig = {
    delay: 3000,
    onlyDesktop: true,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
}

export const HomeSmartSocietyWidgetSliderView = ({
                                                     cards,
                                                     onClickNextBtn,
                                                     sliderRef,
                                                 }: {
    cards: HomeSmartSocietyCard[]
    onClickNextBtn: () => void
    sliderRef: RefObject<ISlider | null>
}) => {
    return (
        <SliderContainer
            slidesPerView={1}
            sliderRef={sliderRef}
            autoplayConfig={AUTO_PLAY_CONFIG}
            spaceBetween={30}
        >
            {cards.map((card, index) => {
                return (
                    <SliderSlide
                        key={index}
                    >
                        <HomeSmartSocietyCardView
                            card={card}
                            onClickNextBtn={onClickNextBtn}
                        />
                    </SliderSlide>
                )
            })}
        </SliderContainer>
    )
}

