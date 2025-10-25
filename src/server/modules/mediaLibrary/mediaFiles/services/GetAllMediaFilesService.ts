import { Injectable, PaginationQueryParams, PaginationValues } from 'os-core-ts'
import { MediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { MediaFilesRepository } from '@modules/mediaLibrary/mediaFiles/repository'

@Injectable()
export class GetAllMediaFilesService {
    constructor(
        private readonly repository: MediaFilesRepository,
    ) {
    }
    
    public async getMediaFilesPagination(params: PaginationQueryParams<MediaFileDto>): Promise<PaginationValues<MediaFileDto>> {
        return this.repository.pagination(params)
    }
}
