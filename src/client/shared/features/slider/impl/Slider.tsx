import { ISlider } from '@client-shared/features/slider/interfaces'
import Swiper from 'swiper'

import { onSliderSlideChange } from '@client-shared/features/slider/interfaces/events'
import { Autoplay } from 'swiper/modules'

Swiper.use([Autoplay])

export class Slider implements ISlider {
    private readonly swiper: Swiper
    
    constructor(element: HTMLElement, {
        slidesPerView,
        loop,
        spaceBetween,
        speed,
        autoplay,
        onSlideChange,
        autoHeight,
    }: {
        slidesPerView?: number
        loop?: boolean
        spaceBetween?: number
        speed?: number
        autoHeight?: boolean
        autoplay?: {
            delay?: number
            disableOnInteraction?: boolean
            pauseOnMouseEnter?: boolean
        }
        onSlideChange?: onSliderSlideChange
    }) {
        this.swiper = new Swiper(element, {
            slidesPerView: slidesPerView || 1,
            ...autoplay ? { autoplay } : {},
            ...loop ? { loop } : {},
            ...spaceBetween ? { spaceBetween } : {},
            ...speed ? { speed } : {},
            ...autoHeight ? { autoHeight } : {},
            ...(onSlideChange ? {
                on: {
                    slideChange: ({
                                      activeIndex,
                                      realIndex,
                                      previousIndex,
                                  }) => {
                        onSlideChange({
                            activeIndex,
                            realIndex,
                            previousIndex,
                        })
                    },
                },
            } : {}),
        })
    }
    
    public slideNext(speed?: number): boolean {
        return this.swiper.slideNext(speed)
    }
    
    public slidePrev(speed?: number): boolean {
        return this.swiper.slidePrev(speed)
    }
    
    public slideTo(index: number, speed?: number): boolean {
        return this.swiper.slideTo(index, speed)
    }
    
    public slideToLoop(index: number, speed?: number): boolean {
        this.swiper.slideToLoop(index, speed)
        return true
    }
    
    public destroy(): void {
        this.swiper.destroy()
    }
}