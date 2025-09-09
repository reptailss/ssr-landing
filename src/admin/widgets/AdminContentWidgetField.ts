import {
    ArrayField,
    IField,
    IUnionFieldValue,
    LiteralField,
    MultilineField,
    ObjectField,
    StringField,
    UnionField,
} from 'admin-panel-builder'
import {
    ClientPaperCard,
    ClientPaperCardEditor,
    ClientPaperCardUl,
    ClientPaperChildren,
    ClientPaperList,
    ClientPaperWidget,
} from '@common/clientWidgets/clientPaperWidget'
import { AdminMediaField } from '@admin-fields/AdminMediaField'
import { AdminEditorField } from '@admin-fields/AdminEditorField'


class UnionValueClientPaperList implements IUnionFieldValue<ClientPaperList> {
    public field = new ObjectField({
        type: new LiteralField('client-paper-list').setHideFieldInRender(),
        title: new StringField().setName('Заголовок'),
        children: new ArrayField(new ObjectField({
            image: new AdminMediaField().setMediaType('image').setName('Зображення').setIcon('material-symbols:image'),
            content: new MultilineField().setName('Текст'),
        })).setHasShowInPopover().setName('Список').setIcon('ic:outline-list'),
    }).setName('Картка з списком')
    
    public math(value: unknown): value is ClientPaperList {
        return typeof value === 'object' && value !== null && 'type' in value && value.type === 'client-paper-list'
    }
}

class UnionValueClientPaperCardEditor implements IUnionFieldValue<ClientPaperCardEditor> {
    public field = new ObjectField({
        type: new LiteralField('client-paper-card-editor').setHideFieldInRender(),
        content: new AdminEditorField().setName('Контент'),
    }).setName('Блок з контентом')
    
    public math(value: unknown): value is ClientPaperCardEditor {
        return typeof value === 'object' && value !== null && 'type' in value && value.type === 'client-paper-card-editor'
    }
}

class UnionValueClientPaperCardUl implements IUnionFieldValue<ClientPaperCardUl> {
    public field = new ObjectField({
        type: new LiteralField('client-paper-card-ul').setHideFieldInRender(),
        list: new ArrayField(new MultilineField().setName('Елемент списку')).setName('Список').setIcon('ic:outline-list').setHasShowInPopover(),
        advantages: new ArrayField(new MultilineField().setName('Перевага')).setName('Переваги').setIcon('ic:outline-list').setHasShowInPopover(),
    }).setName('Блок з списком')
    
    public math(value: unknown): value is ClientPaperCardUl {
        return typeof value === 'object' && value !== null && 'type' in value && value.type === 'client-paper-card-ul'
    }
}

class UnionValueClientPaperCard implements IUnionFieldValue<ClientPaperCard> {
    public field = new ObjectField({
        type: new LiteralField('client-paper-card').setHideFieldInRender(),
        title: new StringField().setName('Заголовок'),
        subtitle: new StringField().setNullable().setName('Підзаголовок'),
        image: new AdminMediaField().setMediaType('image').setName('Зображення').setIcon('material-symbols:image'),
        children: new UnionField([
            new UnionValueClientPaperCardEditor(),
            new UnionValueClientPaperCardUl(),
        ]),
    }).setName('Картка з контентом')
    
    public math(value: unknown): value is ClientPaperCard {
        return typeof value === 'object' && value !== null && 'type' in value && value.type === 'client-paper-card'
    }
}


export class AdminContentWidgetField {
    
    public clientContentWidget(): IField<ClientPaperWidget> {
        return new ObjectField({
            title: new StringField().setNullable().setName('Заголовок'),
            children: new ArrayField(this.clientContentWidgetChildren()),
        }).setName('Секція з контентом').setIcon('streamline-freehand:content-write')
    }
    
    private clientContentWidgetChildren(): IField<ClientPaperChildren> {
        return new UnionField([
            new UnionValueClientPaperList(),
            new UnionValueClientPaperCard(),
        ]).setName('Контент').setIcon('streamline-flex:trending-content-remix')
    }
}


