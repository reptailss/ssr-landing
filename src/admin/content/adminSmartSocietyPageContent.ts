import {
    ArrayField,
    ContentManagerField,
    IUnionFieldValue,
    LiteralField,
    MultilineField,
    NumberField,
    ObjectField,
    StringField,
    UnionField,
} from 'admin-panel-builder'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AdminMediaField } from '@admin-fields/AdminMediaField'
import { SmartSocietyPageContent } from '@common/pagesContent/smartSociety'
import { AdminContentWidgetField } from '@admin-widgets/AdminContentWidgetField'
import { AdminEditorField } from '@admin-fields/AdminEditorField'


type GridCardList = {
    type: 'card'
    title: string
    list: string[]
    desktopCol: number
}

type GridCardImage = {
    type: 'image'
    image: string
    desktopCol: number
}

class UnionValeGridCardList implements IUnionFieldValue<GridCardList> {
    public field = new ObjectField({
        type: new LiteralField('card').setHideFieldInRender(),
        title: new StringField().setName('Заголовок'),
        list: new ArrayField(new StringField()).setName('Список'),
        desktopCol: new NumberField().setMin(1).setMax(3),
    })
    
    public math(value: unknown): value is GridCardList {
        return typeof value === 'object' && value !== null && 'type' in value && value.type === 'card'
    }
}

class UnionValeGridCardImage implements IUnionFieldValue<GridCardImage> {
    public field = new ObjectField({
        type: new LiteralField('image').setHideFieldInRender(),
        image: new AdminMediaField().setName('Зображення').setMediaType('image'),
        desktopCol: new NumberField().setMin(1).setMax(3),
    })
    
    public math(value: unknown): value is GridCardImage {
        return typeof value === 'object' && value !== null && 'type' in value && value.type === 'image'
    }
}

export const adminSmartSocietyPageContent = new ContentManagerField<SmartSocietyPageContent>(
    CLIENT_ROUTE_PATHS.smartSociety,
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
        uniqueWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            list: new ArrayField(new UnionField([
                new UnionValeGridCardList(),
                new UnionValeGridCardImage(),
            ])).setName('Сітка').setIcon('et:grid').setHasShowInPopover(),
        }).setName('Що робить нас унікальними?').setIcon('fa7-brands:superpowers'),
        smartSocietyWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
            banner: new ObjectField({
                icons: new ArrayField(new StringField().setName('Іконка')).setIcon('tdesign:file-icon').setName('Список іконок').setHasShowInPopover(),
                title: new StringField().setName('Заголовок'),
                image: new AdminMediaField().setName('Зображення').setMediaType('image'),
            }).setHasShowInPopover().setName('Банер').setIcon('akar-icons:info-fill'),
        }).setName('Smart society').setIcon('hugeicons:city-03'),
        paperWidget: new AdminContentWidgetField().clientContentWidget(),
        getPresentationWidget: new ObjectField({
            description: new AdminEditorField().setName('Опис'),
        }).setName('Отримати презентацію').setIcon('iconoir:presentation-solid'),
    }),
).setName('Smart society').setIcon('healthicons:city-outline')

