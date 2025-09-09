import React, { memo } from 'react'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'
import { FormValidatorResult } from '@client-shared/formValidator/interfaces'


export const PrimaryInput = memo(({
                                      value,
                                      defaultValue,
                                      onChange,
                                      label,
                                      multiline = false,
                                      formValidatorResult,
                                      helperText,
                                      className,
                                      placeholder,
                                      classNameLabel,
                                  }: {
    value?: string
    placeholder?: string
    defaultValue?: string
    onChange: (value: string) => void
    label?: string
    multiline?: boolean
    formValidatorResult?: FormValidatorResult
    helperText?: string
    className?: string
    classNameLabel?: string
}) => {
    
    return (
        <label
            className={classNames(styles.wrapper, classNameLabel)}
        >
            {label && <span className={styles.label}>{label}</span>}
            
            {multiline ?
                <textarea
                    className={classNames(
                        styles.root,
                        styles.textarea,
                        (formValidatorResult?.error && !!formValidatorResult?.errorMessage) && styles.errorInput,
                        className,
                    )}
                    onChange={(e) => onChange(e.target.value)}
                    defaultValue={defaultValue}
                    value={value}
                    placeholder={placeholder}
                />
                :
                <input
                    className={classNames(
                        styles.root,
                        (formValidatorResult?.error && !!formValidatorResult?.errorMessage) && styles.errorInput,
                        className,
                    )}
                    onChange={(e) => onChange(e.target.value)}
                    defaultValue={defaultValue}
                    value={value}
                    placeholder={placeholder}
                />
            }
            {((formValidatorResult?.error && formValidatorResult?.errorMessage) || (helperText)) && <div
                className={styles.messagesWrapper}
            >
                {(formValidatorResult?.error && formValidatorResult?.errorMessage) &&
                    <span className={styles.errorMessage}>{formValidatorResult.errorMessage}</span>}
                {(helperText) && <span className={styles.helperText}>{helperText}</span>}
            </div>}
        </label>
    )
})
