import { ArrayField, ContentManagerField, ObjectField, StringField } from 'admin-panel-builder'
import { SharedContent } from '@common/sharedContent'
import { AdminMediaField } from '@admin-fields/AdminMediaField'

export const adminSharedContent = new ContentManagerField<SharedContent>(
    'shared',
    new ObjectField({
        eTicketPortalWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            link: new StringField().setName('Посилання'),
            image: new AdminMediaField().setName('Зображення').setMediaType('image'),
            mapImage: new AdminMediaField().setName('Зображення(карта)').setMediaType('image'),
        }).setName('Портал е-квитка').setIcon('tdesign:ticket'),
        socialWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            socialList: new ArrayField(new ObjectField({
                image: new AdminMediaField().setName('Зображення').setMediaType('image'),
                link: new StringField().setName('Посилання'),
            })).setName('Список соц.мереж').setHasShowInPopover(),
        }).setName('Соціальні мережі').setIcon('famicons:share-social-sharp'),
        contactUsForm: new ObjectField({
            recipientEmails: new ArrayField(
                new StringField().setName('email-адреса'),
            ).setMax(6).setIcon('ic:sharp-email').setName('Список email-адрес, на які надсилати форму').setHasShowInPopover(),
        }).setName('Форма зворотнього звязку').setIcon('mdi:contact'),
        smartSociety: new ObjectField({
            presentation: new AdminMediaField().setName('Презентація'),
        }).setName('Smart society').setIcon('hugeicons:city-03'),
    }),
).setName('Базові блоки').setIcon('material-symbols:info-rounded')