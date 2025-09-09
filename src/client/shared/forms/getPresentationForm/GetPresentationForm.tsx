import React, { useCallback, useMemo, useState } from 'react'
import { useFormValidationByValue } from '@client-shared/formValidator/useFormValidation'
import { ObjectFormValidator } from '@client-shared/formValidator/impl/ObjectFormValidator'
import { StringFormValidator } from '@client-shared/formValidator/impl/StringFormValidator'
import { OnSubmitGetPresentationForm } from '@client-shared/forms/getPresentationForm/types'
import { GetPresentationFormView } from '@client-shared/forms/getPresentationForm/views/GetPresentationFormView'


const schema = new ObjectFormValidator({
    email: new StringFormValidator().min(4).email(),
})

export const GetPresentationForm = ({
                                        onSubmit,
                                        presentation,
                                        className,
                                    }: {
    onSubmit: OnSubmitGetPresentationForm
    presentation: string
    className?: string
}) => {
    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)
    
    const value = useMemo(() => {
        return {
            email,
        }
    }, [email])
    
    const {
        validate,
        errorResult,
        markTouched,
        reset,
    } = useFormValidationByValue(
        schema,
        value,
    )
    
    const handleSubmit = useCallback(async () => {
        markTouched()
        
        const { error, data } = validate()
        if (error) {
            return
        }
        
        try {
            setIsLoading(true)
            const res = await onSubmit({
                email: data.email,
            })
            if (res && res.status === 'error') {
                setIsError(true)
                setIsSuccess(false)
                setSuccessMessage(null)
                if (res.message) {
                    setErrorMessage(res.message)
                }
                setIsLoading(false)
                return
            }
            if (res && res.message === 'success') {
                setSuccessMessage(res.message)
            }
            setIsSuccess(true)
            setIsError(false)
            setErrorMessage(null)
            setIsLoading(false)
            reset()
        } catch (error) {
            setIsError(true)
            setErrorMessage(null)
            setIsSuccess(false)
            setSuccessMessage(null)
            setIsLoading(false)
        }
    }, [onSubmit, validate])
    
    const onReset = useCallback(() => {
        setIsError(false)
        setErrorMessage(null)
        setIsSuccess(false)
        setSuccessMessage(null)
        setIsLoading(false)
        reset()
    }, [])
    
    
    return (
        <GetPresentationFormView
            onSubmit={handleSubmit}
            isLoading={isLoading}
            isError={isError}
            isSuccess={isSuccess}
            onReset={onReset}
            onChangeEmail={setEmail}
            className={className}
            inputsValidatorResult={errorResult.shape}
            errorMessage={errorMessage}
            successMessage={successMessage}
            presentation={presentation}
        />
    )
}

