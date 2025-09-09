import { PaginationQueryParams, PaginationValues } from 'os-core-ts'
import { mediaFoldersModel, MediaFoldersModel } from '@modules/mediaLibrary/mediaFolders/model'
import { MediaFolderDto } from '@common/dto/mediaFolderDto'

export class GetAllMediaFoldersService {
    constructor(
        private readonly model: MediaFoldersModel = mediaFoldersModel,
    ) {
    }
    
    public async getMediaFoldersPagination(params: PaginationQueryParams<MediaFolderDto>): Promise<PaginationValues<MediaFolderDto>> {
        return this.model.pagination(params)
    }
}
