import { Injectable, PaginationQueryParams, PaginationValues } from 'os-core-ts'
import { NewsDto } from '@common/dto/newsDto'
import { AppLocaleValue } from '@common/locales'
import { NewsRepository } from '@modules/news/repository'

@Injectable()
export class GetAllNewsService {
    constructor(
        private readonly repository: NewsRepository
    ) {
    }
    
    public async getNewsPagination(
        params: PaginationQueryParams<NewsDto>,
        locale?: AppLocaleValue | null,
    ): Promise<PaginationValues<NewsDto>> {
        return this.repository.pagination(params, {
                ...(locale ? { locale } : {}),
        })
    }
    
    public getLastNewsList(count: number, locale?: AppLocaleValue | null): Promise<NewsDto[]> {
        return this.repository.findAll({
            limit: count,
            order: {
                date_add: 'DESC',
            },
            where: {
                ...(locale ? { locale } : {}),
            },
        })
    }
}
