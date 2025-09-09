import { DateField, MultilanguagePostManager, ObjectField, StringField } from 'admin-panel-builder'
import { AdminMediaField } from '@admin-fields/AdminMediaField'
import { BaseCreateFieldsNewsDto, MultilanguageCreateFieldsNewsDto, NewsDto } from '@common/dto/newsDto'
import { ADMINS_USER_ROLES } from '@common/userRoles'
import { AppLocales } from '@common/locales'
import { AdminMultilanguageNewsManagerProvider } from '@admin-providers/AdminMultilanguageNewsManagerProvider'
import { AdminEditorField } from '@admin-fields/AdminEditorField'


export const adminNewsManager = new MultilanguagePostManager<
    NewsDto,
    BaseCreateFieldsNewsDto,
    MultilanguageCreateFieldsNewsDto,
    AppLocales
>(
    {
        name: 'news',
        baseField: new ObjectField({
            image: new AdminMediaField().setName('Картинка'),
        }),
        multilanguageField: new ObjectField({
            title: new StringField().setName('Назва'),
            content: new AdminEditorField().setName('Контент'),
        }),
        provider: new AdminMultilanguageNewsManagerProvider(),
    },
)
    .setGlobalActionRoles(ADMINS_USER_ROLES)
    .addCardPreviewField(
        'date_update',
        new DateField()
            .configureRender((render) => {
                render.previewRenderConfig
                    .setFontSize('12px')
                    .setMargin('0 0 8px 0')
                    .setColor('rgb(209, 209, 209)')
                    .setFormatDate()
            }),
    ).addCardPreviewField(
        'title',
        new StringField()
            .configureRender((render) => {
                render.previewRenderConfig
                    .setFontSize('18px')
            }),
    ).setCardPreviewImage('image')
