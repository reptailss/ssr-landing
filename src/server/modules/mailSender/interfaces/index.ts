export interface IMailSender {
    send(
        props: {
            to: string
            subject: string
            html: string
        },
    ): Promise<void>
}