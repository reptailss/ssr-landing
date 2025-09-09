import {
    BuildResponseFormat,
    ControllerDec,
    GetDec,
    PaginationQueryParams,
    PaginationQueryParamsDec,
    PaginationResult,
    SwaggerInfoDec,
} from 'os-core-ts'
import { NewsValidator } from '@modules/news/validator/NewsValidator'
import { GetAllNewsService } from '@modules/news/services/GetAllNewsService'
import { NEWS_ROUTE_PATHS } from '@common/apiRoutePaths/newsRoutePaths'
import { NewsDto } from '@common/dto/newsDto'

const newsValidator = new NewsValidator()
const newsDtoPaginationQueryParamsSchema = newsValidator.getNewsDtoPaginationQueryParamsSchema()

@ControllerDec()
export class GetAllNewsController {
    constructor(private readonly getAllNewsService: GetAllNewsService = new GetAllNewsService()) {
    }
    
    @SwaggerInfoDec({ summary: 'Get news list' })
    @GetDec(NEWS_ROUTE_PATHS.list)
    public async getNewsPagination(
        @PaginationQueryParamsDec(newsDtoPaginationQueryParamsSchema)
        params: PaginationQueryParams<NewsDto>,
    ): Promise<PaginationResult<NewsDto>> {
        const paginationValues = await this.getAllNewsService.getNewsPagination(params)
        return BuildResponseFormat.pagination(paginationValues)
    }
}
