

export type ContactUsDto = CreateContactUsDto & {
    status: ContactUsStatus
    id: number
    date_add: Date
    date_update: Date
}

export type CreateContactUsDto = {
    email: string
    text: string
    form_name: string
}

export type ContactUsStatus = 'pending'  | 'in_progress' | 'resolved' | 'closed'


export type UpdateContactUsDto = {
    status: ContactUsStatus
}
