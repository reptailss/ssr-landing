import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocale } from 'os-react-ssr-client'
import { AppLocale } from '@common/locales'
import { IFormSchemaValidator } from '@client-shared/formValidator/interfaces/formSchemaValidator'
import { FormValidateResult } from '@client-shared/formValidator/interfaces/result'

export function useFormValidationByValue<Schema extends IFormSchemaValidator>(
    schema: Schema,
    value: unknown,
): {
    validate: () =>  FormValidateResult<Schema['_errorResult'], Schema['_value']>,
    errorResult: Schema['_errorResult'],
    reset: () => void
    markTouched: () => void
} {
    const [errorResult, setErrorResult] = useState<Schema['_errorResult']>(() => schema.getValidErrorResult())
    const [touched, setTouched] = useState<boolean>(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    
    const locale = useLocale()
    
    const validate = useCallback((): FormValidateResult<Schema['_errorResult'], Schema['_value']> => {
        const res = schema.validate(
            value,
            locale as AppLocale,
        )
        setErrorResult(res.errorResult)
        return res
    }, [value, locale])
    
    const reset = useCallback(() => {
        setTouched(false)
        setErrorResult(schema.getValidErrorResult())
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }, [])
    
    const markTouched = useCallback(() => {
        setTouched(true)
    }, [])
    
    useEffect(() => {
        if (!touched) {
            return
        }
        
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        
        timeoutRef.current = setTimeout(() => {
            validate()
        }, 500)
        
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [validate])
    
    return {
        validate,
        errorResult,
        reset,
        markTouched,
    }
}
