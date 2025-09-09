import { AppError } from 'os-core-ts'
import { GetMediaFolderService } from '@modules/mediaLibrary/mediaFolders/services/GetMediaFolderService'
import { mediaFilesModel, MediaFilesModel } from '@modules/mediaLibrary/mediaFiles/model'

export class MediaFilesChecker {
    
    constructor(
        private readonly model: MediaFilesModel = mediaFilesModel,
        private readonly getMediaFolderService: GetMediaFolderService = new GetMediaFolderService(),
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
        const dto = await this.model.findOne({
            filters: {
                name,
                folder_id: folderId,
            },
        })
        if (dto) {
            throw new AppError('Already exists', {
                errorKey: 'ALREADY_EXISTS_ERROR',
            })
        }
    }
}