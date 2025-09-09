import {
    AppError,
    BuildResponseFormat,
    ControllerDec,
    GetDec,
    QueryParamDec,
    QueryParamOptionalDec,
    SwaggerInfoDec,
} from 'os-core-ts'
import { GetPageContentService } from '@modules/pageContents/services/GetPageContentService'
import { PAGE_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/pageContentsRoutePaths'
import { AppLocale } from '@common/locales'
import { PagesContentResponse } from '@common/apiResponses/pagesContentResponses'

@ControllerDec()
export class GetPageContentController {
    constructor(
        private readonly getPageContentService: GetPageContentService = new GetPageContentService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Get page-content by page and key' })
    @GetDec(PAGE_CONTENTS_ROUTE_PATHS.getByPageAndKey)
    public async getPageContentByPageAndKey(
        @QueryParamDec('page') page: string,
        @QueryParamDec('key') key: string,
        @QueryParamOptionalDec('locale') locale: AppLocale | undefined,
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
