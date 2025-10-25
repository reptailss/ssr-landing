import {
    BuildResponseFormat,
    Controller,
    Get,
    PaginationQueryParams,
    PaginationParams,
    PaginationResult,
    SwaggerInfo,
} from 'os-core-ts'
import { NewsValidator } from '@modules/news/validator/NewsValidator'
import { GetAllNewsService } from '@modules/news/services/GetAllNewsService'
import { NEWS_ROUTE_PATHS } from '@common/apiRoutePaths/newsRoutePaths'
import { NewsDto } from '@common/dto/newsDto'

const newsValidator = new NewsValidator()
const newsDtoPaginationQueryParamsSchema = newsValidator.getNewsDtoPaginationQueryParamsSchema()

@Controller()
export class GetAllNewsController {
    constructor(private readonly getAllNewsService: GetAllNewsService) {
    }
    
    @SwaggerInfo({ summary: 'Get news list' })
    @Get(NEWS_ROUTE_PATHS.list)
    public async getNewsPagination(
        @PaginationParams(newsDtoPaginationQueryParamsSchema)
        params: PaginationQueryParams<NewsDto>,
    ): Promise<PaginationResult<NewsDto>> {
        const paginationValues = await this.getAllNewsService.getNewsPagination(params)
        return BuildResponseFormat.pagination(paginationValues)
    }
}
