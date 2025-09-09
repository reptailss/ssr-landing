import { CONTACT_US_ROUTE_PATHS } from '@common/apiRoutePaths/contactUsRoutePaths'

export class ContactUsApi {
    
    static async contactUs({
                               email,
                               text,
                               formName,
                               recipientEmails,
                           }: {
        email: string
        text: string
        formName: string
        recipientEmails: string[]
    }): Promise<void> {
        const response = await fetch(CONTACT_US_ROUTE_PATHS.add, {
            method: 'POST',
            body: JSON.stringify({
                email,
                text,
                form_name:formName,
                recipient_emails:recipientEmails || [],
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        
        if (!response.ok) {
            const errors = await response.json()
            throw new Error(errors)
        }
    }
}