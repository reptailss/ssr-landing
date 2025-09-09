import { DateField, EnumField, FormManager, ObjectField, StringField } from 'admin-panel-builder'
import { ADMINS_USER_ROLES } from '@common/userRoles'
import { ContactUsDto, UpdateContactUsDto } from '@common/dto/contactUsDto'
import { AdminContactUsFormManagerProvider } from '@admin-providers/AdminContactUsFormManagerProvider'

const STATUS_LABELS = {
    pending: 'Очікує',
    closed: 'Закрито',
    in_progress: 'В роботі',
    resolved: 'Вирішено',
} as const

export const adminContactUsManager = new FormManager<
    ContactUsDto,
    UpdateContactUsDto
>(
    'contact-us',
    new ObjectField({
        status: new EnumField(['pending', 'in_progress', 'resolved', 'closed'] as const)
            .setName('Статус')
            .setLabels(STATUS_LABELS),
    }),
    new AdminContactUsFormManagerProvider(),
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
    )
    .addCardPreviewField(
        'email',
        new StringField()
            .configureRender((render) => {
                    render.previewRenderConfig
                        .setFontSize('18px')
                },
            ),
    )
    .addCardPreviewField(
        (contactUs) => {
            if (contactUs.status in STATUS_LABELS) {
                return `Статус: ${STATUS_LABELS[contactUs.status]}` as string
            }
            return `Статус: ${contactUs.status}`
        },
        new StringField()
            .configureRender((render) => {
                    render.previewRenderConfig
                        .setFontSize('18px')
                },
            ),
    )
    .addCardPreviewField((contactUs) => {
            if (contactUs.text?.length > 20) {
                return `${contactUs.text.slice(0, 20)}...`
            }
            return contactUs.text
        }, new StringField()
            .configureRender((render) => {
                render.previewRenderConfig
                    .setFontSize('14px')
            }),
    )