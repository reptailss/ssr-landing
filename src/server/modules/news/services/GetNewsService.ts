import { MultilanguageCreateFieldsNewsDto, MultilanguageNewsDto } from '@common/dto/newsDto'
import { AppLocaleValue, DEFAULT_APP_LOCALE_VALUE } from '@common/locales'
import { NewsRepository } from '@modules/news/repository'
import { Injectable } from 'os-core-ts'

@Injectable()
export class GetNewsService {
    constructor(private readonly repository: NewsRepository) {
    }
    
    
    public async getBySlug(slug: string, locale?: AppLocaleValue | null) {
        return this.repository.findOne({
            slug,
            ...(locale ? { locale } : {}),
        })
    }
    
    public async getMultilanguageNews(slug: string): Promise<MultilanguageNewsDto | null> {
        const newsDtoList = await this.repository.findAll({
            where: {
                slug,
            },
        })
        if (!newsDtoList.length) {
            return null
        }
        const newsDtoInDefaultLanguage = newsDtoList.find((news) => news.locale === DEFAULT_APP_LOCALE_VALUE) || newsDtoList[0]
        const multilanguageField: {
            [key: AppLocaleValue[number]]: MultilanguageCreateFieldsNewsDto
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
    
    public async getByTitleAndLocale(title: string, locale?: AppLocaleValue | null) {
        return this.repository.findOne({
            title,
            ...(locale ? { locale } : {}),
        })
    }
}
