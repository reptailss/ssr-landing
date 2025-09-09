import React, { useCallback, useMemo, useState } from 'react'
import { OnSubmitContactForm } from '@client-shared/forms/contactForm/types'
import { ContactFormView } from '@client-shared/forms/contactForm/views/ContactFormView'
import { useFormValidationByValue } from '@client-shared/formValidator/useFormValidation'
import { ObjectFormValidator } from '@client-shared/formValidator/impl/ObjectFormValidator'
import { StringFormValidator } from '@client-shared/formValidator/impl/StringFormValidator'


const schema = new ObjectFormValidator({
    email: new StringFormValidator().min(4).email(),
    text: new StringFormValidator().min(3),
})

export const ContactForm = ({
                                onSubmit,
                                formName,
                                recipientEmails,
                                className,
                            }: {
    onSubmit: OnSubmitContactForm
    formName: string
    recipientEmails: string[]
    className?: string
}) => {
    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)
    
    const value = useMemo(() => {
        return {
            email,
            text,
        }
    }, [email, text])
    
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
                text: data.text,
                email: data.email,
                formName,
                recipientEmails,
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
        <ContactFormView
            onSubmit={handleSubmit}
            isLoading={isLoading}
            isError={isError}
            isSuccess={isSuccess}
            onReset={onReset}
            onChangeEmail={setEmail}
            onChangeText={setText}
            className={className}
            inputsValidatorResult={errorResult.shape}
            errorMessage={errorMessage}
            successMessage={successMessage}
        />
    )
}

