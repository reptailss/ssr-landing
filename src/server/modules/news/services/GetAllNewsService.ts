import { PaginationQueryParams, PaginationValues } from 'os-core-ts'
import { newsModel, NewsModel } from '@modules/news/model'
import { NewsDto } from '@common/dto/newsDto'
import { AppLocale } from '@common/locales'

export class GetAllNewsService {
    constructor(private readonly model: NewsModel = newsModel) {
    }
    
    public async getNewsPagination(
        params: PaginationQueryParams<NewsDto>,
        locale?: AppLocale | null,
    ): Promise<PaginationValues<NewsDto>> {
        return this.model.pagination(params,{
            filters:{
                ...(locale ? { locale } : {}),
            }
        })
    }
    
    public getLastNewsList(count: number, locale?: AppLocale | null): Promise<NewsDto[]> {
        return this.model.findAll({
            limit: count,
            order: {
                date_add: 'DESC',
            },
            filters: {
                ...(locale ? { locale } : {}),
            },
        })
    }
}
