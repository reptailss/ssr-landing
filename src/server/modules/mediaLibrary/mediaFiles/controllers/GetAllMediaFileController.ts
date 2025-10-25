import { BuildResponseFormat, Controller, Get, PaginationParams, PaginationQueryParams, SwaggerInfo } from 'os-core-ts'
import { MediaFilesValidator } from '@modules/mediaLibrary/mediaFiles/validator/MediaFilesValidator'
import { GetAllMediaFilesService } from '@modules/mediaLibrary/mediaFiles/services/GetAllMediaFilesService'
import { MediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { MEDIA_FILES_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFilesRoutePaths'
import { MediaFilesListResponse } from '@common/apiResponses/mediaFilesReponses'

const mediaFilesValidator = new MediaFilesValidator()

const mediaFileDtoPaginationQueryParamsSchema =
    mediaFilesValidator.getMediaFileDtoPaginationQueryParamsSchema()

@Controller()
export class GetAllMediaFileController {
    constructor(
        private readonly getAllMediaFileService: GetAllMediaFilesService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Get media-files list' })
    @Get(MEDIA_FILES_ROUTE_PATHS.list)
    public async getMediaFilesPagination(
        @PaginationParams(mediaFileDtoPaginationQueryParamsSchema)
        params: PaginationQueryParams<MediaFileDto>,
    ): Promise<MediaFilesListResponse> {
        const paginationValues = await this.getAllMediaFileService.getMediaFilesPagination(params)
        return BuildResponseFormat.pagination(paginationValues)
    }
}
