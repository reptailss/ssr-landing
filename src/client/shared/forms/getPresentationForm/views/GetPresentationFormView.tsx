import React from 'react'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'
import { PrimaryInput } from '@client-ui/inputs/primaryInput'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { SecondaryBtn } from '@client-ui/buttons/secondaryBtn'
import { FormValidatorResult } from '@client-shared/formValidator/interfaces'
import { OverlaySpinner } from '@client-ui/spinners/overlay'
import { PrimaryBtn } from '@client-ui/buttons/primaryBtn'

export const GetPresentationFormView = ({
                                            onSubmit,
                                            isLoading,
                                            className,
                                            onChangeEmail,
                                            inputsValidatorResult,
                                            isError,
                                            isSuccess,
                                            onReset,
                                            successMessage,
                                            errorMessage,
                                            presentation,
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
    className?: string
    inputsValidatorResult: {
        email: FormValidatorResult
    }
    presentation: string
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
                    className,
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
                className,
            )}
        >
            {presentation && <a
                href={presentation}
                download
                className={styles.link}
            >
                <PrimaryBtn
                    type={'button'}
                    className={styles.downloadPresentation}
                    disabled={!presentation}
                >
                    {t('downloadPresentation')}
                </PrimaryBtn>
            </a>}
            
            
            <PrimaryInput
                onChange={onChangeEmail}
                label={t('email')}
                formValidatorResult={inputsValidatorResult.email}
                helperText={`*-${t('requiredField')}`}
                classNameLabel={styles.input}
            />
            
            <SecondaryBtn
                type={'submit'}
                className={styles.btn}
                disabled={isLoading || !presentation}
            >
                {t('getInTheMail')}
            </SecondaryBtn>
        </form>
    )
}

