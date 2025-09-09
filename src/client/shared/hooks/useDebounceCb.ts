import { useEffect, useMemo, useRef } from 'react'

export const useDebounceCb = (
    callback: (...args: any[]) => void,
    delay: number,
) => {
    const callbackRef = useRef(callback)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    
    useEffect(() => {
        callbackRef.current = callback
    }, [callback])
    
    return useMemo(() => {
        return (...args: any[]) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }
            timerRef.current = setTimeout(() => {
                callbackRef.current(...args)
            }, delay)
        }
    }, [delay])
}
