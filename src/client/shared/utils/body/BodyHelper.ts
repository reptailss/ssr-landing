
export class BodyHelper {
    
    static lockScroll() {
        if (typeof document === 'undefined') {
            return
        }
        document.body.style.overflow = 'hidden'
    }
    
    static unlockScroll() {
        if (typeof document === 'undefined') {
            return
        }
        
        document.body.style.overflow = 'initial'
    }
}