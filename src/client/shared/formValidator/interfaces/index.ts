import { AppLocale } from '@common/locales'

export type ObjectValueSchemaFormValidator = { [k: string]: IFormValidator };


export interface IFormValidatorSchema<Shape extends ObjectValueSchemaFormValidator> {
    
    validate(value: unknown, locale?: AppLocale | null): FormValidatorSchemaResult<Shape>
    
    getShape(): Shape
}

export interface IFormValidator<Type = any> {
    validate(value: Type | unknown, locale?: AppLocale | null): FormValidatorResult
}

export type FormValidatorResult = {
    errorMessage: null
    error: false
} | {
    errorMessage: string
    error: true
}

export type FormValidatorSchemaResult<Shape extends ObjectValueSchemaFormValidator> = {
    errorMessages: {
        [k in keyof Shape]: FormValidatorResult
    }
    error: boolean
}

export interface IStringFormValidator extends IFormValidator<string> {
    min(minValue: number): this
    
    max(maxValue: number): this
}