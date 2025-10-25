import { ActionsLoggerService, AppError, appLogger, Injectable } from 'os-core-ts'
import { DeleteMediaFileService } from '@modules/mediaLibrary/mediaFiles/services/DeleteMediaFileService'
import { MediaFolderDto } from '@common/dto/mediaFolderDto'
import { MediaFoldersRepository } from '@modules/mediaLibrary/mediaFolders/repository'

@Injectable()
export class DeleteMediaFolderService {
    constructor(
        private readonly repository: MediaFoldersRepository,
        private readonly deleteMediaFileService: DeleteMediaFileService,
        private readonly actionsLoggerService: ActionsLoggerService,
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
        const childrenMediaFoldersDtoList = await this.repository.findAll({
            parent_id: id,
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
        const oldDto = await this.repository.findOne({
            id,
        })
        if (!oldDto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        
        await this.repository.destroy({
            id,
        })
        
        await this.deleteMediaFileService.deleteByFolderId({
            initiatorOpenUserId,
            folderId: id,
        })
        
        await this.actionsLoggerService.logDeleteAction({
            oldValue: oldDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: id,
        })
        
        return oldDto
    }
}
