export type OnSubmitContactForm = (props: {
    email: string
    text: string
    formName: string
    recipientEmails: string[]
}) => Promise<{
    status: 'error' | 'success'
    message: string | null
} | void>