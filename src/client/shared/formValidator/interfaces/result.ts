export type FormValidateErrorResult<ErrorResult> = {
    errorMessage: null
    error: false
} | {
    errorMessage: ErrorResult
    error: true
}

export type FormValidateResult<ErrorResult, Value> = {
    errorResult: ErrorResult
    error: true
    data: null
    
} | {
    errorResult: ErrorResult
    error: false
    data: Value
}