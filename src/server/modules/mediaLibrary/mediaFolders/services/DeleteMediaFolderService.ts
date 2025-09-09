import { ActionsLoggerService, AppError, appLogger } from 'os-core-ts'
import { mediaFoldersModel, MediaFoldersModel } from '@modules/mediaLibrary/mediaFolders/model'
import { DeleteMediaFileService } from '@modules/mediaLibrary/mediaFiles/services/DeleteMediaFileService'
import { MediaFolderDto } from '@common/dto/mediaFolderDto'

export class DeleteMediaFolderService {
    constructor(
        private readonly model: MediaFoldersModel = mediaFoldersModel,
        private readonly deleteMediaFileService: DeleteMediaFileService = new DeleteMediaFileService(),
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async deleteMediaFolderByIdWithChild({
                                                    initiatorOpenUserId,
                                                    id,
                                                }: {
        initiatorOpenUserId: number
        id: number
    }): Promise<{
        mediaFolderDto: MediaFolderDto
        childCountDelete: number
    }> {
        const mediaFolderDto = await this.deleteMediaFolderById({
            initiatorOpenUserId,
            id,
        })
        
        const childCountDelete = await this.deleteChildMediaFolders({
            initiatorOpenUserId,
            id,
        })
        
        return {
            mediaFolderDto,
            childCountDelete,
        }
    }
    
    public async deleteChildMediaFolders({
                                             initiatorOpenUserId,
                                             id,
                                         }: {
        initiatorOpenUserId: number
        id: number
    }): Promise<number> {
        const childrenMediaFoldersDtoList = await this.model.findAll({
            filters: {
                parent_id: id,
            },
        })
        if (!childrenMediaFoldersDtoList.length) {
            return 0
        }
        let res: number = 0
        
        for (const mediaFolderDto of childrenMediaFoldersDtoList) {
            try {
                const { childCountDelete } = await this.deleteMediaFolderByIdWithChild({
                    initiatorOpenUserId,
                    id: mediaFolderDto.id,
                })
                res++
                if (childCountDelete > 0) {
                    res += childCountDelete
                }
            } catch (error) {
                appLogger.error('error delete child folder', error)
            }
            
        }
        
        return res
    }
    
    public async deleteMediaFolderById({
                                           initiatorOpenUserId,
                                           id,
                                       }: {
        initiatorOpenUserId: number
        id: number
    }): Promise<MediaFolderDto> {
        const oldDto = await this.model.findOne({
            filters: { id: id },
        })
        if (!oldDto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        
        await this.model.destroy({
            filters: { id: id },
        })
        
        await this.deleteMediaFileService.deleteByFolderId({
            initiatorOpenUserId,
            folderId: id,
        })
        
        await this.actionsLoggerService.logDeleteAction({
            oldValue: oldDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: id,
        })
        
        return oldDto
    }
}
