import { IStringFormValidator } from '@client-shared/formValidator/interfaces/string'
import { AppLocale, DEFAULT_APP_LOCALE } from '@common/locales'
import { FormValidateErrorResult, FormValidateResult } from '@client-shared/formValidator/interfaces/result'

const MESSAGES: Record<AppLocale, Record<string, string>> = {
    uk: {
        invalidType: 'Значення має бути текстом.',
        tooShort: 'Мінімальна довжина символів — {min}.',
        tooLong: 'Максимальна довжина символів — {max}.',
        invalidEmail: 'Невірна email-адреса.',
    },
    en: {
        invalidType: 'Value must be a string.',
        tooShort: 'Minimum length is {min} characters.',
        tooLong: 'Maximum length is {max} characters.',
        invalidEmail: 'Invalid email address.',
    },
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export class StringFormValidator<Value = string> implements IStringFormValidator<Value> {
    public readonly _errorResult!: FormValidateErrorResult<string>
    public readonly _value!: Value
    public readonly type = 'string' as const
    
    private message: string | null = null
    private minValue: number | null = null
    private minMessage: string | null = null
    private maxValue: number | null = null
    private maxMessage: string | null = null
    private isEmail: boolean = false
    private emailMessage: string | null = null
    private isOptional: boolean = false
    private isNullable: boolean = false
    
    constructor(message?: string) {
        if (message) {
            this.message = message
        }
    }
    
    public validate(value: unknown, locale?: AppLocale | null): FormValidateResult<FormValidateErrorResult<string>, Value> {
        const dict = MESSAGES[locale || DEFAULT_APP_LOCALE]
        
        if (typeof value === 'undefined') {
            if (!this.isOptional) {
                return {
                    errorResult: {
                        error: true,
                        errorMessage: this.message ?? dict.invalidType,
                    },
                    data: null,
                    error: true,
                }
            }
            return {
                data: value,
                error: false,
                errorResult: {
                    error: false,
                    errorMessage: null,
                },
            } as unknown as FormValidateResult<FormValidateErrorResult<string>, Value>
        }
        
        if (value === null) {
            if (!this.isNullable) {
                return {
                    errorResult: {
                        error: true,
                        errorMessage: this.message ?? dict.invalidType,
                    },
                    data: null,
                    error: true,
                }
            }
            return {
                data: value,
                error: false,
                errorResult: {
                    error: false,
                    errorMessage: null,
                },
            } as unknown as FormValidateResult<FormValidateErrorResult<string>, Value>
        }
        
        if (typeof value !== 'string') {
            return {
                data: null,
                error: true,
                errorResult: {
                    error: true,
                    errorMessage: this.message ?? dict.invalidType,
                },
            }
        }
        
        if (this.minValue !== null && value.length < this.minValue) {
            return {
                data: null,
                error: true,
                errorResult: {
                    error: true,
                    errorMessage: this.minMessage ?? dict.tooShort.replace('{min}', String(this.minValue)),
                },
            }
        }
        
        if (this.maxValue !== null && value.length > this.maxValue) {
            return {
                data: null,
                error: true,
                errorResult: {
                    error: true,
                    errorMessage: this.maxMessage ?? dict.tooLong.replace('{max}', String(this.maxValue)),
                },
            }
        }
        
        if (this.isEmail && !emailRegex.test(value)) {
            return {
                data: null,
                error: true,
                errorResult: {
                    error: true,
                    errorMessage: this.emailMessage ?? dict.invalidEmail,
                },
            }
        }
        
        return {
            data: value,
            error: false,
            errorResult: {
                error: false,
                errorMessage: null,
            },
        } as unknown as FormValidateResult<FormValidateErrorResult<string>, Value>
    }
    
    public getValidErrorResult(): FormValidateErrorResult<string> {
        return {
            error: false,
            errorMessage: null,
        }
    }
    
    public min(minValue: number, message?: string): this {
        this.minValue = minValue
        if (message) {
            this.minMessage = message
        }
        return this
    }
    
    public max(maxValue: number, message?: string): this {
        this.maxValue = maxValue
        if (message) {
            this.maxMessage = message
        }
        return this
    }
    
    public email(message?: string): this {
        this.isEmail = true
        if (message) {
            this.emailMessage = message
        }
        return this
    }
    
    public optional(): IStringFormValidator<Value | undefined> {
        this.isNullable = true
        return this as any
    }
    
    public nullable(): IStringFormValidator<Value | null> {
        this.isOptional = true
        return this as any
    }
}
