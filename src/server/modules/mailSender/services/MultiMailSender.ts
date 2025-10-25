import { MailSender } from '@modules/mailSender/impl/MailSender'
import { appLogger, Injectable } from 'os-core-ts'

@Injectable()
export class MultiMailSender {
    
    constructor(private readonly mailSender: MailSender) {
    }
    
    public async send({
                          recipientEmails,
                          subject,
                          html,
                      }: {
        recipientEmails: string[]
        html: string,
        subject: string,
    }): Promise<number> {
        let count = 0
        
        for (const email of recipientEmails) {
            try {
                await this.mailSender.send({
                    to: email,
                    subject,
                    html,
                })
                count++
            } catch (error) {
                appLogger.error(error)
            }
            
        }
        return count
    }
}