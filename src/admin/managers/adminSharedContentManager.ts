import { ContentManager } from 'admin-panel-builder'
import { ADMINS_USER_ROLES } from '@common/userRoles'
import { AdminSharedContentManagerProvider } from '@admin-providers/AdminSharedContentManagerProvider'
import { adminSharedContent } from '@admin-content/adminSharedContent'

export const adminSharedContentManager = new ContentManager(
    'shared',
    new AdminSharedContentManagerProvider(),
)
    .setGlobalActionRoles(ADMINS_USER_ROLES)
    .addField(adminSharedContent)
