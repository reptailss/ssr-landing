export const APP_SERVER_CONFIG = {
    mailer: {
        service: process.env.INIT_MAILER_SERVICE || '',
        user: process.env.INIT_MAILER_USER || '',
        password: process.env.INIT_MAILER_PASSWORD || '',
        contactUsMaxEmailSendCount: 7,
    },
    appPublicDomain: process.env.APP_PUBLIC_DOMAIN || 'https://ua-gis.com',
} as const