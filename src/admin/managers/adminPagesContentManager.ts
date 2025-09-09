import { AdminPagesContentManagerProvider } from '@admin-providers/AdminPagesContentManagerProvider'
import { ADMINS_USER_ROLES } from '@common/userRoles'
import { AdminAuthRequest, ContentManager } from 'admin-panel-builder'
import { adminHomePageContent } from '@admin-content/adminHomePageContent'
import { adminProductsPageContent } from '@admin-content/adminProductsPageContent'
import { adminGpsMonitoringAndDispatchingPageContent } from '@admin-content/adminGpsMonitoringAndDispatchingPageContent'
import { adminETicketPageContent } from '@admin-content/adminETicketPageContent'
import { adminDistributionPageContent } from '@admin-content/adminDistributionPageContent'
import { IContentManagerAction } from 'admin-panel-builder/dist/types/src/contentManager/interfaces'
import { AdminServerApiUrlBuilder } from '@admin-helpers/AdminServerApiUrlBuilder'
import { PAGE_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/pageContentsRoutePaths'
import { adminSmartSocietyPageContent } from '@admin-content/adminSmartSocietyPageContent'
import { adminContactsPageContent } from '@admin-content/adminContactsPageContent'
import { adminNewsPageContent } from '@admin-content/adminNewsPageContent'
import { adminTermsOfUsePageContent } from '@admin-content/adminTermsOfUsePageContent'
import { adminPrivacyPolicyPageContent } from '@admin-content/adminPrivacyPolicyPageContent'
import { adminCivilPageContent } from '@admin-content/adminCivilPageContent'

class ResetToDefaultPageContentAction implements IContentManagerAction {
    
    public getName(): string {
        return 'Встановити дефолтне значення'
    }
    
    public async action({
                            token,
                            fieldKey,
                            locale,
                            fieldUrl,
                        }: {
        fieldUrl: string
        fieldKey: string
        locale: string | null
        token: string | null
    }): Promise<void> {
        await AdminAuthRequest.post({
            url: AdminServerApiUrlBuilder.build(PAGE_CONTENTS_ROUTE_PATHS.resetToDefaultPageContent),
            token: token || '',
            body: JSON.stringify({
                key: fieldKey,
                page: fieldUrl,
                locale,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}

export const adminPagesContentManager = new ContentManager(
    'pages',
    new AdminPagesContentManagerProvider(),
)
    .addAction(new ResetToDefaultPageContentAction())
    .setGlobalActionRoles(ADMINS_USER_ROLES)
    .addField(adminHomePageContent)
    .addField(adminProductsPageContent)
    .addField(adminGpsMonitoringAndDispatchingPageContent)
    .addField(adminETicketPageContent)
    .addField(adminDistributionPageContent)
    .addField(adminSmartSocietyPageContent)
    .addField(adminCivilPageContent)
    .addField(adminContactsPageContent)
    .addField(adminNewsPageContent)
    .addField(adminTermsOfUsePageContent)
    .addField(adminPrivacyPolicyPageContent)
