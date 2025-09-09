import { ContentManagerField, MultilineField, ObjectField, StringField } from 'admin-panel-builder'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { DistributionPageContent } from '@common/pagesContent/distribution'
import { AdminContentWidgetField } from '@admin-widgets/AdminContentWidgetField'

export const adminDistributionPageContent = new ContentManagerField<DistributionPageContent>(
    CLIENT_ROUTE_PATHS.distribution,
    new ObjectField({
        seo: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
        }).setName('СЕО').setIcon('hugeicons:seo'),
        heroWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
        }).setName('HERO блок').setIcon('arcticons:score-hero'),
        paperWidget: new AdminContentWidgetField().clientContentWidget(),
    }),
).setName('Дистрибуція').setIcon('lsicon:distribution-outline')

