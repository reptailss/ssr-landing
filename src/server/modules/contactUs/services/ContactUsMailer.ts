import { MultiMailSender } from '@modules/mailSender/services/MultiMailSender'
import { CONTACT_US_MAX_EMAIL_SEND_COUNT } from '@constants/maxEmailSendedCount'
import fs from 'fs/promises'
import path from 'path'
import { APP_SERVER_CONFIG } from '@config'

export class ContactUsMailer {
    constructor(
        private readonly multiMailSender: MultiMailSender = new MultiMailSender(),
    ) {
    }
    
    
    public async sendEmails({
                                formName,
                                userEmail,
                                text,
                                recipientEmails,
                            }: {
        formName: string
        userEmail: string
        text: string
        recipientEmails: string[]
    }): Promise<void> {
        if (!recipientEmails.length) {
            return
        }
        const html = await this.buildHtml({
            formName,
            email: userEmail,
            text,
            date: new Date().toLocaleDateString(),
        })
        
        await this.multiMailSender.send({
            html,
            subject: `GIS - ${APP_SERVER_CONFIG.appPublicDomain} ${formName}`,
            recipientEmails: CONTACT_US_MAX_EMAIL_SEND_COUNT < recipientEmails.length ? recipientEmails.slice(0, CONTACT_US_MAX_EMAIL_SEND_COUNT) : recipientEmails,
        })
    }
    
    private async buildHtml({
                                formName,
                                email,
                                text,
                                date,
                            }: {
        formName: string
        email: string
        text: string
        date: string
    }): Promise<string> {
        const html = await fs.readFile(path.resolve(process.cwd(), 'templates', 'contactUsEmail.html'), 'utf8')
        return html
            .replace('{{formName}}', formName)
            .replace('{{email}}', email)
            .replace('{{text}}', text)
            .replace('{{date}}', date)
    }
}