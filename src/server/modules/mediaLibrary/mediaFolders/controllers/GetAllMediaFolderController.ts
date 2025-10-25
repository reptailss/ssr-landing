import { BuildResponseFormat, Controller, Get, PaginationParams, PaginationQueryParams, SwaggerInfo } from 'os-core-ts'
import { MediaFoldersValidator } from '@modules/mediaLibrary/mediaFolders/validator/MediaFoldersValidator'
import { GetAllMediaFoldersService } from '@modules/mediaLibrary/mediaFolders/services/GetAllMediaFoldersService'
import { MEDIA_FOLDERS_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFoldersRoutePaths'
import { MediaFoldersListResponse } from '@common/apiResponses/mediaFoldersResponses'
import { MediaFolderDto } from '@common/dto/mediaFolderDto'

const mediaFoldersValidator = new MediaFoldersValidator()

const mediaFolderDtoPaginationQueryParamsSchema =
    mediaFoldersValidator.getMediaFolderDtoPaginationQueryParamsSchema()

@Controller()
export class GetAllMediaFolderController {
    constructor(
        private readonly getAllMediaFolderService: GetAllMediaFoldersService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Get media-folders list' })
    @Get(MEDIA_FOLDERS_ROUTE_PATHS.list)
    public async getMediaFoldersPagination(
        @PaginationParams(mediaFolderDtoPaginationQueryParamsSchema)
        params: PaginationQueryParams<MediaFolderDto>,
    ): Promise<MediaFoldersListResponse> {
        const paginationValues = await this.getAllMediaFolderService.getMediaFoldersPagination(params)
        return BuildResponseFormat.pagination(paginationValues)
    }
}
