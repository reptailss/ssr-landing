import {
    AppError,
    BuildResponseFormat,
    ControllerDec,
    GetDec,
    QueryParamDec,
    QueryParamOptionalDec,
    RowResult,
    SwaggerInfoDec,
} from 'os-core-ts'
import { GetSharedContentService } from '@modules/sharedContents/services/GetSharedContentService'
import { SharedContentDto } from '@common/dto/sharedContentDto'
import { SHARED_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/sharedContentRoutePaths'
import { AppLocale } from '@common/locales'

@ControllerDec()
export class GetSharedContentController {
    constructor(
        private readonly getSharedContentService: GetSharedContentService = new GetSharedContentService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Get shared-content by id' })
    @GetDec(SHARED_CONTENTS_ROUTE_PATHS.getByKey)
    public async getSharedContentById(
        @QueryParamDec('key') key: string,
        @QueryParamOptionalDec('locale') locale: AppLocale | undefined,
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
