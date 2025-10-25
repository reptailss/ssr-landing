import { Injectable, PaginationQueryParams, PaginationValues } from 'os-core-ts'
import { MediaFolderDto } from '@common/dto/mediaFolderDto'
import { MediaFoldersRepository } from '@modules/mediaLibrary/mediaFolders/repository'

@Injectable()
export class GetAllMediaFoldersService {
    constructor(
        private readonly repository: MediaFoldersRepository,
    ) {
    }
    
    public async getMediaFoldersPagination(params: PaginationQueryParams<MediaFolderDto>): Promise<PaginationValues<MediaFolderDto>> {
        return this.repository.pagination(params)
    }
}
