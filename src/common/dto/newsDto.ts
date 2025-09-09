import { AppLocale } from '@common/locales'

export type NewsDto = CreateNewsDto & {
    slug: string
    id: number
    date_add: Date
    date_update: Date
}


export type MultilanguageNewsDto  = {
    base_field: BaseCreateFieldsNewsDto
    multilanguage_field:{
        [key: AppLocale[number]]: MultilanguageCreateFieldsNewsDto
    }
}

export type UpdateNewsDto = Partial<CreateNewsDto>

export type CreateNewsDto = {
    title: string
    content: string
    locale: AppLocale
    image: string
}


export type BaseCreateFieldsNewsDto = {
    image: string
    date_add?:Date
}

export type MultilanguageCreateFieldsNewsDto = {
    title: string
    content: string
}

export type CreateMultilanguageNewsDto = {
    base_field: BaseCreateFieldsNewsDto
    multilanguage_field:{
        [key: AppLocale[number]]: MultilanguageCreateFieldsNewsDto
    }
}

export type UpdateMultilanguageNewsDto = {
    base_field: BaseCreateFieldsNewsDto
    multilanguage_field:{
        [key: AppLocale[number]]: MultilanguageCreateFieldsNewsDto
    }
}