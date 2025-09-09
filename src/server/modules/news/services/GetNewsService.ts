import { MultilanguageCreateFieldsNewsDto, MultilanguageNewsDto } from '@common/dto/newsDto'
import { AppLocale, DEFAULT_APP_LOCALE } from '@common/locales'
import { newsModel, NewsModel } from '@modules/news/model'

export class GetNewsService {
    constructor(private readonly model: NewsModel = newsModel) {
    }
    
    
    public async getBySlug(slug: string, locale?: AppLocale | null) {
        return this.model.findOne({
            filters: {
                slug,
                ...(locale ? { locale } : {}),
            },
        })
    }
    
    public async getMultilanguageNews(slug: string): Promise<MultilanguageNewsDto | null> {
        const newsDtoList = await this.model.findAll({
            filters: {
                slug,
            },
        })
        if (!newsDtoList.length) {
            return null
        }
        const newsDtoInDefaultLanguage = newsDtoList.find((news) => news.locale === DEFAULT_APP_LOCALE) || newsDtoList[0]
        const multilanguageField: {
            [key: AppLocale[number]]: MultilanguageCreateFieldsNewsDto
        } = {}
        
        for (const newsDto of newsDtoList) {
            multilanguageField[newsDto.locale] = {
                title: newsDto.title,
                content: newsDto.content,
            }
        }
        return {
            base_field: {
                image: newsDtoInDefaultLanguage.image,
            },
            multilanguage_field: multilanguageField,
        }
    }
    
    public async getByTitleAndLocale(title: string, locale?: AppLocale | null) {
        return this.model.findOne({
            filters: {
                title,
                ...(locale ? { locale } : {}),
            },
        })
    }
}
