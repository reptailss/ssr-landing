import { ArrayField, ContentManagerField, MultilineField, ObjectField, StringField } from 'admin-panel-builder'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AdminMediaField } from '@admin-fields/AdminMediaField'
import { GpsMonitoringAndDispatchingPageContent } from '@common/pagesContent/gpsMonitoringAndDispatching'
import { AdminContentWidgetField } from '@admin-widgets/AdminContentWidgetField'
import { AdminEditorField } from '@admin-fields/AdminEditorField'

export const adminGpsMonitoringAndDispatchingPageContent = new ContentManagerField<GpsMonitoringAndDispatchingPageContent>(
    CLIENT_ROUTE_PATHS.gpsMonitoringAndDispatching,
    new ObjectField({
        seo: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
        }).setName('СЕО').setIcon('hugeicons:seo'),
        heroWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
            image: new AdminMediaField().setMediaType('image').setName('Зображення'),
        }).setName('HERO блок').setIcon('arcticons:score-hero'),
        functionalityWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            functionalityList: new ArrayField(new ObjectField({
                image: new AdminMediaField().setMediaType('image').setName('Зображення'),
                title: new StringField().setName('Заголовок'),
                description: new MultilineField().setName('Заголовок'),
            })).setName('Список можливостей').setIcon('ion:list-outline').setHasShowInPopover(),
            advantages: new ObjectField({
                title: new StringField().setName('Заголовок'),
                list: new ArrayField(new MultilineField()).setName('Список переваг').setIcon('ion:list-outline'),
            }).setName('Переваги').setHasShowInPopover(),
            tags: new ArrayField(new StringField()).setName('Список тегів').setIcon('material-symbols:tag-rounded').setHasShowInPopover(),
        }).setName('Функціональні можливості').setIcon('oui:kql-function'),
        paperWidget: new AdminContentWidgetField().clientContentWidget(),
        eTransportWidget: new ObjectField({
            content: new AdminEditorField().setName('Контент'),
        }).setName('e-Transport').setIcon('arcticons:transport'),
    }),
).setName('GPS-моніторинг та диспетчеризація').setIcon('streamline-freehand:gps-location-rectangle')

