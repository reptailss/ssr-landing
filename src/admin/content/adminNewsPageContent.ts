import { ArrayField, ContentManagerField, MultilineField, ObjectField, StringField } from 'admin-panel-builder'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { ContactsPageContent } from '@common/pagesContent/contacts'
import { NewsPageContent } from '@common/pagesContent/news'

export const adminNewsPageContent = new ContentManagerField<NewsPageContent>(
    CLIENT_ROUTE_PATHS.news,
    new ObjectField({
        seo: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
        }).setName('СЕО').setIcon('hugeicons:seo'),
        infoWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
        }).setName('Інформація').setIcon('material-symbols:info-rounded'),
    }),
).setName('Сторінка новин').setIcon('arcticons:top-news')

