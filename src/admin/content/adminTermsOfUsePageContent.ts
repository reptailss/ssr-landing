import { ContentManagerField, MultilineField, ObjectField, StringField } from 'admin-panel-builder'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { TermsOfUsePageContent } from '@common/pagesContent/termsOfUse'
import { AdminEditorField } from '@admin-fields/AdminEditorField'

export const adminTermsOfUsePageContent = new ContentManagerField<TermsOfUsePageContent>(
    CLIENT_ROUTE_PATHS.termsOfUse,
    new ObjectField({
        seo: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
        }).setName('СЕО').setIcon('hugeicons:seo'),
        content: new ObjectField({
            value: new AdminEditorField(),
        }).setName('Контент').setIcon('streamline-freehand:content-write'),
    }),
).setName('Terms of use').setIcon('stash:user-at-light')

