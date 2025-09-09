import React from 'react'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'
import { PrimaryInput } from '@client-ui/inputs/primaryInput'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { SecondaryBtn } from '@client-ui/buttons/secondaryBtn'
import { FormValidatorResult } from '@client-shared/formValidator/interfaces'
import { OverlaySpinner } from '@client-ui/spinners/overlay'
import { PrimaryBtn } from '@client-ui/buttons/primaryBtn'

export const ContactFormView = ({
                                    onSubmit,
                                    isLoading,
                                    className,
                                    onChangeEmail,
                                    onChangeText,
                                    inputsValidatorResult,
                                    isError,
                                    isSuccess,
                                    onReset,
                                    successMessage,
                                    errorMessage,
                                }: {
    isSuccess: boolean
    successMessage: string | null
    isError: boolean
    errorMessage: string | null
    onReset: () => void
    onSubmit: () => Promise<void>
    onCloseAfterSuccess?: () => Promise<void>
    isLoading: boolean
    onChangeEmail: (value: string) => void
    onChangeText: (value: string) => void
    className?: string
    inputsValidatorResult: {
        email: FormValidatorResult
        text: FormValidatorResult
    }
}) => {
    
    const t = useTranslation()
    
    
    if (isLoading) {
        return (
            <OverlaySpinner />
        )
    }
    
    
    if (isError) {
        return (
            <div
                className={classNames(
                    styles.root,
                    styles.info,
                    className
                )}
            >
                <p
                    className={styles.errorMessage}
                >
                    {errorMessage ?? `${t('anErrorOccurred')}...`}
                </p>
                
                <PrimaryBtn
                    onClick={onReset}
                >
                    {t('tryAgain')}
                </PrimaryBtn>
            </div>
        )
    }
    
    if (isSuccess) {
        return (
            <div
                className={classNames(
                    styles.root,
                    styles.info,
                    className,
                )}
            >
                <p
                    className={styles.successMessage}
                >
                    {successMessage ?? t('success')}!
                </p>
                
                <PrimaryBtn
                    onClick={onReset}
                >
                    {t('tryAgain')}
                </PrimaryBtn>
            </div>
        )
    }
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await onSubmit()
            }}
            className={classNames(
                styles.root,
                className
            )}
        >
            <PrimaryInput
                onChange={onChangeEmail}
                label={t('email')}
                formValidatorResult={inputsValidatorResult.email}
                helperText={`*-${t('requiredField')}`}
            />
            
            <PrimaryInput
                onChange={onChangeText}
                label={t('message')}
                multiline
                className={styles.email}
                formValidatorResult={inputsValidatorResult.text}
                helperText={`*-${t('requiredField')}`}
            />
            
            <SecondaryBtn
                type={'submit'}
                className={styles.btn}
                disabled={isLoading}
            >
                {t('send')}
            </SecondaryBtn>
        </form>
    )
}

