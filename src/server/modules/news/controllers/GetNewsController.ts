import { AppError, BuildResponseFormat, Controller, Get, Param, SwaggerInfo } from 'os-core-ts'
import { GetNewsService } from '@modules/news/services/GetNewsService'
import { NEWS_ROUTE_PATHS } from '@common/apiRoutePaths/newsRoutePaths'
import { MultilanguageNewsResponse } from '@common/apiResponses/newsResponses'

@Controller()
export class GetNewsController {
    constructor(private readonly getNewsService: GetNewsService) {
    }
    
    @SwaggerInfo({ summary: 'Get multilanguage news' })
    @Get(NEWS_ROUTE_PATHS.getMultilanguage)
    public async getMultilanguageNews(
        @Param('slug') slug: string,
    ): Promise<MultilanguageNewsResponse> {
        const dto = await this.getNewsService.getMultilanguageNews(slug)
        if (!dto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        return BuildResponseFormat.row(dto)
    }
}
