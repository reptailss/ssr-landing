import { AppLocale } from '@common/locales'
import { FormValidateResult } from '@client-shared/formValidator/interfaces/result'

export interface IFormSchemaValidator<
    ErrorResult = any,
    Value = any,
> {
    readonly _errorResult: ErrorResult
    readonly _value: Value
    type: string
    
    
    validate(value: unknown, locale?: AppLocale | null): FormValidateResult<ErrorResult,Value>
    
    getValidErrorResult(): ErrorResult
}


