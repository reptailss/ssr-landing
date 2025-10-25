import {
    AppError,
    BuildResponseFormat,
    Controller,
    Get,
    QueryParam,
    QueryParamOptional,
    RowResult,
    SwaggerInfo,
} from 'os-core-ts'
import { GetSharedContentService } from '@modules/sharedContents/services/GetSharedContentService'
import { SharedContentDto } from '@common/dto/sharedContentDto'
import { SHARED_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/sharedContentRoutePaths'
import { AppLocaleValue } from '@common/locales'

@Controller()
export class GetSharedContentController {
    constructor(
        private readonly getSharedContentService: GetSharedContentService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Get shared-content by id' })
    @Get(SHARED_CONTENTS_ROUTE_PATHS.getByKey)
    public async getSharedContentById(
        @QueryParam('key') key: string,
        @QueryParamOptional('locale') locale: AppLocaleValue | undefined,
    ): Promise<RowResult<SharedContentDto>> {
        const dto = await this.getSharedContentService.getSharedContentByKey({
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
