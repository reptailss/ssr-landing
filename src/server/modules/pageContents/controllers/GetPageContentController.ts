import {
    AppError,
    BuildResponseFormat,
    Controller,
    Get,
    QueryParam,
    QueryParamOptional,
    SwaggerInfo,
} from 'os-core-ts'
import { GetPageContentService } from '@modules/pageContents/services/GetPageContentService'
import { PAGE_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/pageContentsRoutePaths'
import { AppLocaleValue } from '@common/locales'
import { PagesContentResponse } from '@common/apiResponses/pagesContentResponses'

@Controller()
export class GetPageContentController {
    constructor(
        private readonly getPageContentService: GetPageContentService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Get page-content by page and key' })
    @Get(PAGE_CONTENTS_ROUTE_PATHS.getByPageAndKey)
    public async getPageContentByPageAndKey(
        @QueryParam('page') page: string,
        @QueryParam('key') key: string,
        @QueryParamOptional('locale') locale: AppLocaleValue | undefined,
    ): Promise<PagesContentResponse> {
        const dto = await this.getPageContentService.getPageContentByPageAndKey({
            page,
            key,
            locale,
        })
        if (!dto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        return BuildResponseFormat.row(dto)
    }
}
