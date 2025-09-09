export type OnSubmitGetPresentationForm = (props: {
    email: string
}) => Promise<{
    status: 'error' | 'success'
    message: string | null
} | void>