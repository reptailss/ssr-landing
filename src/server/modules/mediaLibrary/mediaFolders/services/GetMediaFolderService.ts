import { MediaFolderDto } from '@common/dto/mediaFolderDto'
import { Injectable } from 'os-core-ts'
import { MediaFoldersRepository } from '@modules/mediaLibrary/mediaFolders/repository'

@Injectable()
export class GetMediaFolderService {
    constructor(
        private readonly repository: MediaFoldersRepository,
    ) {
    }
    
    public async getMediaFolderById(id: number): Promise<MediaFolderDto | null> {
        return this.repository.findByPk(id)
    }
}
