import { ArrayField, ContentManagerField, MultilineField, ObjectField, StringField } from 'admin-panel-builder'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AdminMediaField } from '@admin-fields/AdminMediaField'
import { AdminContentWidgetField } from '@admin-widgets/AdminContentWidgetField'
import { AdminEditorField } from '@admin-fields/AdminEditorField'
import { CivilPageContent } from '@common/pagesContent/civil'


export const adminCivilPageContent = new ContentManagerField<CivilPageContent>(
    CLIENT_ROUTE_PATHS.civil,
    new ObjectField({
        seo: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
        }).setName('СЕО').setIcon('hugeicons:seo'),
        heroWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new AdminEditorField().setName('Опис'),
            video: new AdminMediaField().setName('Відео').setMediaType('video'),
            videoPreview: new AdminMediaField().setName('Preview для відео').setMediaType('image'),
        }).setName('HERO блок').setIcon('arcticons:score-hero'),
        trekWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            levels: new ArrayField(new ObjectField({
                title: new StringField(),
                items: new ArrayField(new ObjectField({
                    icon: new AdminMediaField().setName('Іконка'),
                    label: new StringField().setName('Опис'),
                })).setIcon('qlementine-icons:items-list-24').setName('Елементи'),
            })).setName('Levels').setIcon('f7:increase-quotelevel').setHasShowInPopover(),
        }).setName('Trek').setIcon('material-symbols:transportation-outline-sharp'),
        paperWidget: new AdminContentWidgetField().clientContentWidget(),
    }),
).setName('CIVIL').setIcon('carbon:app')

