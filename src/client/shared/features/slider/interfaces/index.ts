export interface ISlider {
    slideNext(speed?: number): boolean
    
    slidePrev(speed?: number): boolean
    
    slideTo(index: number, speed?: number): boolean
    
    slideToLoop(index: number, speed?: number): boolean
    
    destroy():void
}