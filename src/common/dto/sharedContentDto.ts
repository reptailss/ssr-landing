import { AppLocale } from '@common/locales'

export type SharedContentDto = CreateSharedContentDto & {
    id: number
    date_add: Date
    date_update: Date
}


export type UpdateSharedContentDto = Partial<CreateSharedContentDto>

export type CreateSharedContentDto = {
    key: string
    value: object
    locale: AppLocale
}
