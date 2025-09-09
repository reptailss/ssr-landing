import { mediaFoldersModel, MediaFoldersModel } from '@modules/mediaLibrary/mediaFolders/model'
import { MediaFolderDto } from '@common/dto/mediaFolderDto'

export class GetMediaFolderService {
    constructor(
        private readonly model: MediaFoldersModel = mediaFoldersModel,
    ) {
    }
    
    public async getMediaFolderById(id: number): Promise<MediaFolderDto | null> {
        return this.model.findByPk(id)
    }
}
