import { AppError, Injectable } from 'os-core-ts'
import { GetMediaFolderService } from '@modules/mediaLibrary/mediaFolders/services/GetMediaFolderService'
import { MediaFilesRepository } from '@modules/mediaLibrary/mediaFiles/repository'

@Injectable()
export class MediaFilesChecker {
    
    constructor(
        private readonly repository: MediaFilesRepository,
        private readonly getMediaFolderService: GetMediaFolderService,
    ) {
    }
    
    public async checkFolderId(folderId: number): Promise<void> {
        if (folderId === 0) {
            return
        }
        const mediaFolderDto = await this.getMediaFolderService.getMediaFolderById(folderId)
        
        if (!mediaFolderDto) {
            throw new AppError('Not found folder', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
    }
    
    public async checkUniqFields({
                                     folderId,
                                     name,
                                 }: {
        folderId: number
        name: string
    }): Promise<void> {
        const dto = await this.repository.findOne({
            name,
            folder_id: folderId,
        })
        if (dto) {
            throw new AppError('Already exists', {
                errorKey: 'ALREADY_EXISTS_ERROR',
            })
        }
    }
}