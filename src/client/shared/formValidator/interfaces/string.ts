import { IFormSchemaValidator } from '@client-shared/formValidator/interfaces/formSchemaValidator'
import { FormValidateErrorResult } from '@client-shared/formValidator/interfaces/result'

export interface IStringFormValidator<Value = string> extends IFormSchemaValidator<
    FormValidateErrorResult<string>, Value
> {
    type: 'string'
    
    min(value: number, message?: string): void
    
    max(value: number, message?: string): void
    
    email(message?: string): void
    
    optional(): IStringFormValidator<Value | undefined>
    
    nullable(): IStringFormValidator<Value | null>
}