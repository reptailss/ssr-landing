import { ArrayField, ContentManagerField, MultilineField, ObjectField, StringField } from 'admin-panel-builder'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AdminMediaField } from '@admin-fields/AdminMediaField'
import { ETicketPageContent } from '@common/pagesContent/eTicket'
import { AdminContentWidgetField } from '@admin-widgets/AdminContentWidgetField'
import { AdminEditorField } from '@admin-fields/AdminEditorField'

export const adminETicketPageContent = new ContentManagerField<ETicketPageContent>(
    CLIENT_ROUTE_PATHS.eTicket,
    new ObjectField({
        seo: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
        }).setName('СЕО').setIcon('hugeicons:seo'),
        heroWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
            image: new AdminMediaField().setMediaType('image').setName('Зображення'),
            eTicketPortal: new ObjectField({
                title: new StringField().setName('Заголовок'),
                link: new StringField().setName('Посилання'),
                image: new AdminMediaField().setName('Зображення').setMediaType('image'),
                mapImage: new AdminMediaField().setName('Зображення(карта)').setMediaType('image'),
            }).setName('Портал е-квитка').setIcon('tdesign:ticket'),
        }).setName('HERO блок').setIcon('arcticons:score-hero'),
        afpsWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            list: new ArrayField(new MultilineField().setName('Контент')).setName('Список').setIcon('ion:list-outline').setHasShowInPopover(),
        }).setName('Автоматизована система обліку та оплати проїзду').setIcon('oui:kql-function'),
        paperWidget: new AdminContentWidgetField().clientContentWidget(),
        implementationAfpsWidget: new ObjectField({
            content: new AdminEditorField().setName('Контент'),
        }).setName('Впровадження АСООП').setIcon('tabler:car-filled'),
    }),
).setName('Електроний квиток').setIcon('carbon:ticket')

