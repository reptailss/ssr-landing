import { ArrayField, ContentManagerField, MultilineField, ObjectField, StringField } from 'admin-panel-builder'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { ContactsPageContent } from '@common/pagesContent/contacts'

export const adminContactsPageContent = new ContentManagerField<ContactsPageContent>(
    CLIENT_ROUTE_PATHS.contacts,
    new ObjectField({
        seo: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
        }).setName('СЕО').setIcon('hugeicons:seo'),
        infoWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            address: new StringField().setName('Адреса'),
            phoneNumbers: new ArrayField(new StringField().setName('Номер')).setName('Номери телефону').setHasShowInPopover(),
            email: new StringField().setName('Пошта'),
            emailForPress: new StringField().setName('Пошта для ЗМІ'),
        }).setName('Інформація').setIcon('material-symbols:info-rounded'),
    }),
).setName('Контакти').setIcon('material-symbols:contacts')

