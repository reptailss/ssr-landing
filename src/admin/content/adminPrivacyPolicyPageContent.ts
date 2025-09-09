import { ContentManagerField, MultilineField, ObjectField, StringField } from 'admin-panel-builder'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { PrivacyPolicyPageContent } from '@common/pagesContent/privacy-policy'
import { AdminEditorField } from '@admin-fields/AdminEditorField'

export const adminPrivacyPolicyPageContent = new ContentManagerField<PrivacyPolicyPageContent>(
    CLIENT_ROUTE_PATHS.privacyPolicy,
    new ObjectField({
        seo: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
        }).setName('СЕО').setIcon('hugeicons:seo'),
        content: new ObjectField({
            value: new AdminEditorField(),
        }).setName('Контент').setIcon('streamline-freehand:content-write'),
    }),
).setName('Privacy policy').setIcon('iconoir:privacy-policy')

