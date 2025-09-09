import { PaginationQueryParams, PaginationValues } from 'os-core-ts'
import { MediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { mediaFilesModel, MediaFilesModel } from '@modules/mediaLibrary/mediaFiles/model'

export class GetAllMediaFilesService {
    constructor(
        private readonly model: MediaFilesModel = mediaFilesModel,
    ) {
    }
    
    public async getMediaFilesPagination(params: PaginationQueryParams<MediaFileDto>): Promise<PaginationValues<MediaFileDto>> {
        return this.model.pagination(params)
    }
}
