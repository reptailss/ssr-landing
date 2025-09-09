import { AppError, BuildResponseFormat, ControllerDec, GetDec, ParamDec, SwaggerInfoDec } from 'os-core-ts'
import { GetNewsService } from '@modules/news/services/GetNewsService'
import { NEWS_ROUTE_PATHS } from '@common/apiRoutePaths/newsRoutePaths'
import { MultilanguageNewsResponse } from '@common/apiResponses/newsResponses'

@ControllerDec()
export class GetNewsController {
    constructor(private readonly getNewsService: GetNewsService = new GetNewsService()) {
    }
    
    @SwaggerInfoDec({ summary: 'Get multilanguage news' })
    @GetDec(NEWS_ROUTE_PATHS.getMultilanguage)
    public async getMultilanguageNews(
        @ParamDec('slug') slug: string,
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
