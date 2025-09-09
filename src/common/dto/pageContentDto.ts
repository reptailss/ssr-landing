import { AppLocale } from '@common/locales'


export type PageContentDto<Value = object> = CreatePageContentDto<Value> & {
    id: number
    date_add: Date
    date_update: Date
}


export type UpdatePageContentDto = Partial<CreatePageContentDto>

export type CreatePageContentDto<Value = object> = {
    key: string
    value: Value
    page: string
    locale: AppLocale
}
