import { IFormSchemaValidator } from '@client-shared/formValidator/interfaces/formSchemaValidator'

export interface IObjectFormValidator<
    Shape extends ObjectValueFormSchemaValidator,
    Result = ObjectFormValidatorResult<
        ObjectResultTypeValidator<Shape>
    >,
    Value = ObjectValueTypeValidator<Shape>
> extends IFormSchemaValidator<
    Result, Value
> {
    type: 'object'
    
    optional(): IObjectFormValidator<Shape, Result, Value | undefined>
    
    nullable(): IObjectFormValidator<Shape, Result, Value | null>
}

export type ObjectFormValidatorResult<Shape> = {
    shape: Shape
    error: false
    errorMessage: null
} | {
    shape: Shape
    error: true
    errorMessage: string | null
}
export type ObjectValueFormSchemaValidator = { [k: string]: IFormSchemaValidator };

export type baseObjectOutputType<Shape extends ObjectValueFormSchemaValidator> = {
    [k in keyof Shape]: Shape[k]['_errorResult'];
}

export type baseObjectValueOutputType<Shape extends ObjectValueFormSchemaValidator> = {
    [k in keyof Shape]: Shape[k]['_value'];
}

export type ObjectResultTypeValidator<
    Shape extends ObjectValueFormSchemaValidator,
> = flatten<
    addQuestionMarks<baseObjectOutputType<Shape>>
>

export type ObjectValueTypeValidator<
    Shape extends ObjectValueFormSchemaValidator,
> = flatten<
    addQuestionMarks<baseObjectValueOutputType<Shape>>
>

type identity<T> = T

type flatten<T> = identity<{ [k in keyof T]: T[k] }>

type requiredKeys<T extends object> = {
    [k in keyof T]: undefined extends T[k] ? never : k;
}[keyof T];

type optionalKeys<T extends object> = {
    [k in keyof T]: undefined extends T[k] ? k : never;
}[keyof T];

type addQuestionMarks<T extends object, _O = any> = {
    [K in requiredKeys<T>]: T[K];
} & {
    [K in optionalKeys<T>]?: T[K];
} & { [k in keyof T]?: unknown };

