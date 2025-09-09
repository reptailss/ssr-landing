import nodemailer from 'nodemailer'
import { APP_SERVER_CONFIG } from '@config'
import { AppError, appLogger } from 'os-core-ts'
import { IMailSender } from '@modules/mailSender/interfaces'

const transporter = nodemailer.createTransport({
    service: APP_SERVER_CONFIG.mailer.service,
    auth: {
        user: APP_SERVER_CONFIG.mailer.user,
        pass: APP_SERVER_CONFIG.mailer.password,
    },
})

export class MailSender implements IMailSender {
    
    public async send({
                          to,
                          subject,
                          html,
                      }: {
        to: string,
        subject: string,
        html: string,
    }): Promise<void> {
        try {
            await transporter.sendMail({
                from: APP_SERVER_CONFIG.mailer.user,
                to,
                html,
                subject,
                attachments: [],
            })
        } catch (error) {
            appLogger.error(' Error send mail.', error)
            throw new AppError('Error sending mail.', {
                errorKey: 'SERVER_SIDE_ERROR',
            })
        }
    }
}