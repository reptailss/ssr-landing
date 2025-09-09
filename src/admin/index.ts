import { App, ClientAppCreator } from 'admin-panel-builder'
import { APP_LOCALES, DEFAULT_APP_LOCALE } from '@common/locales'
import { AdminAuthProvider } from '@admin-providers/AdminAuthProvider'
import { AdminAccessProvider } from '@admin-providers/AdminAccessProvider'
import { adminAccessManager } from '@admin-managers/adminAccessManager'
import { adminPagesContentManager } from '@admin-managers/adminPagesContentManager'
import { adminNewsManager } from '@admin-managers/adminNewsManager'
import { adminContactUsManager } from '@admin-managers/adminContactUsManager'
import { adminSharedContentManager } from '@admin-managers/adminSharedContentManager'


const app = new App()
    .setLocales(APP_LOCALES)
    .setDefaultLocale(DEFAULT_APP_LOCALE)
    .setAuthProvider(new AdminAuthProvider())
    .setAccessProvider(new AdminAccessProvider())
    .addAccessManager(adminAccessManager)
    .addContentManager(adminPagesContentManager)
    .addContentManager(adminSharedContentManager)
    .addMultilanguagePostManager(adminNewsManager)
    .addFormManager(adminContactUsManager)


new ClientAppCreator(
    document.getElementById('root'),
    app,
).init()

