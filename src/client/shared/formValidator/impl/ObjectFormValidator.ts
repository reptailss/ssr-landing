import { AppLocale, DEFAULT_APP_LOCALE } from '@common/locales'
import {
    IObjectFormValidator,
    ObjectFormValidatorResult,
    ObjectResultTypeValidator,
    ObjectValueFormSchemaValidator,
    ObjectValueTypeValidator,
} from '@client-shared/formValidator/interfaces/object'
import { FormValidateResult } from '@client-shared/formValidator/interfaces/result'


const MESSAGES: Record<AppLocale, Record<string, string>> = {
    uk: {
        invalidType: 'Значення має бути обєктом.',
    },
    en: {
        invalidType: 'Value must be a object.',
    },
}

export class ObjectFormValidator<
    Shape extends ObjectValueFormSchemaValidator,
    ErrorResult = ObjectFormValidatorResult<
        ObjectResultTypeValidator<Shape>
    >,
    Value = ObjectValueTypeValidator<Shape>
> implements IObjectFormValidator<Shape, ErrorResult, Value> {
    
    public readonly _errorResult!: ErrorResult
    public readonly type = 'object' as const
    public readonly _value!: Value
    
    private isOptional: boolean = false
    private isNullable: boolean = false
    private message: string | null = null
    
    constructor(private readonly shape: Shape, message?: string) {
        if (message) {
            this.message = message
        }
    }
    
    
    public validate(value: unknown, locale?: AppLocale | null): FormValidateResult<ErrorResult, Value> {
        const dict = MESSAGES[locale || DEFAULT_APP_LOCALE]
        
        const shape: Shape = {} as Shape
        const data: Value = {} as Value
        const input = typeof value === 'object' && value !== null && !Array.isArray(value) ? value as Record<string, unknown> : {}
        
        let error = false
        for (const key in this.shape) {
            const schema = this.shape[key]
            const res = schema.validate(input[key], locale)
            if (!error && res.error) {
                error = true
            }
            shape[key] = res.error ? res.errorResult : schema.getValidErrorResult()
            if (!res.error) {
                //@ts-ignore
                data[key] = res.data
                shape[key] = schema.getValidErrorResult()
            } else {
                shape[key] = res.errorResult
            }
        }
        
        if (typeof value === 'undefined') {
            if (!this.isOptional) {
                return {
                    errorResult: {
                        shape,
                        error: true,
                        errorMessage: this.message ?? dict.invalidType,
                    },
                    data: null,
                    error: true,
                } as FormValidateResult<ErrorResult, Value>
            }
            return {
                data: value,
                error: false,
                errorResult: {
                    shape,
                    error: false,
                    errorMessage: null,
                },
            } as unknown as FormValidateResult<ErrorResult, Value>
        }
        
        if (value === null) {
            if (!this.isNullable) {
                return {
                    errorResult: {
                        shape,
                        error: true,
                        errorMessage: this.message ?? dict.invalidType,
                    },
                    data: null,
                    error: true,
                } as FormValidateResult<ErrorResult, Value>
            }
            return {
                data: value,
                error: false,
                errorResult: {
                    shape,
                    error: false,
                    errorMessage: null,
                },
            } as unknown as FormValidateResult<ErrorResult, Value>
        }
        
        if (typeof value !== 'object' || Array.isArray(value)) {
            return {
                data: null,
                error: true,
                errorResult: {
                    shape,
                    error: true,
                    errorMessage: this.message ?? dict.invalidType,
                },
            } as FormValidateResult<ErrorResult, Value>
        }
        
        
        return {
            error,
            errorResult: {
                shape,
                error,
                errorMessage: null,
            },
            data: error ? null : data,
        } as FormValidateResult<ErrorResult, Value>
    }
    
    public getValidErrorResult(): ErrorResult {
        
        const shape: Shape = {} as Shape
        
        
        for (const key in this.shape) {
            shape[key] = this.shape[key].getValidErrorResult()
        }
        
        return {
            error: false,
            errorMessage: null,
            shape,
        } as ErrorResult
    }
    
    public optional(): IObjectFormValidator<Shape, ErrorResult, Value | undefined> {
        this.isOptional = true
        return this as any
    }
    
    public nullable(): IObjectFormValidator<Shape, ErrorResult, Value | null> {
        this.isOptional = true
        return this as any
    }
    
    public getShape(): Shape {
        return this.shape
    }
    
}
