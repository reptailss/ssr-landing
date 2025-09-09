import {
    BuildResponseFormat,
    ControllerDec,
    GetDec,
    PaginationQueryParams,
    PaginationQueryParamsDec,
    SwaggerInfoDec,
} from 'os-core-ts'
import { MediaFilesValidator } from '@modules/mediaLibrary/mediaFiles/validator/MediaFilesValidator'
import { GetAllMediaFilesService } from '@modules/mediaLibrary/mediaFiles/services/GetAllMediaFilesService'
import { MediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { MEDIA_FILES_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFilesRoutePaths'
import { MediaFilesListResponse } from '@common/apiResponses/mediaFilesReponses'

const mediaFilesValidator = new MediaFilesValidator()

const mediaFileDtoPaginationQueryParamsSchema =
    mediaFilesValidator.getMediaFileDtoPaginationQueryParamsSchema()

@ControllerDec()
export class GetAllMediaFileController {
    constructor(
        private readonly getAllMediaFileService: GetAllMediaFilesService = new GetAllMediaFilesService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Get media-files list' })
    @GetDec(MEDIA_FILES_ROUTE_PATHS.list)
    public async getMediaFilesPagination(
        @PaginationQueryParamsDec(mediaFileDtoPaginationQueryParamsSchema)
        params: PaginationQueryParams<MediaFileDto>,
    ): Promise<MediaFilesListResponse> {
        const paginationValues = await this.getAllMediaFileService.getMediaFilesPagination(params)
        return BuildResponseFormat.pagination(paginationValues)
    }
}
