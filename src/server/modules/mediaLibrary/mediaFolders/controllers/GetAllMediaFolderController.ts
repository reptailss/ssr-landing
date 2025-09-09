import {
    BuildResponseFormat,
    ControllerDec,
    GetDec,
    PaginationQueryParams,
    PaginationQueryParamsDec,
    SwaggerInfoDec,
} from 'os-core-ts'
import { MediaFoldersValidator } from '@modules/mediaLibrary/mediaFolders/validator/MediaFoldersValidator'
import { GetAllMediaFoldersService } from '@modules/mediaLibrary/mediaFolders/services/GetAllMediaFoldersService'
import { MEDIA_FOLDERS_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFoldersRoutePaths'
import { MediaFoldersListResponse } from '@common/apiResponses/mediaFoldersResponses'
import { MediaFolderDto } from '@common/dto/mediaFolderDto'

const mediaFoldersValidator = new MediaFoldersValidator()

const mediaFolderDtoPaginationQueryParamsSchema =
    mediaFoldersValidator.getMediaFolderDtoPaginationQueryParamsSchema()

@ControllerDec()
export class GetAllMediaFolderController {
    constructor(
        private readonly getAllMediaFolderService: GetAllMediaFoldersService = new GetAllMediaFoldersService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Get media-folders list' })
    @GetDec(MEDIA_FOLDERS_ROUTE_PATHS.list)
    public async getMediaFoldersPagination(
        @PaginationQueryParamsDec(mediaFolderDtoPaginationQueryParamsSchema)
        params: PaginationQueryParams<MediaFolderDto>,
    ): Promise<MediaFoldersListResponse> {
        const paginationValues = await this.getAllMediaFolderService.getMediaFoldersPagination(params)
        return BuildResponseFormat.pagination(paginationValues)
    }
}
