import { ActionsLoggerService, AppError, appLogger, FileService, Injectable } from 'os-core-ts'
import { MediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { MediaFilesRepository } from '@modules/mediaLibrary/mediaFiles/repository'

@Injectable()
export class DeleteMediaFileService {
    constructor(
        private readonly repository: MediaFilesRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    public async deleteMediaFileById({
                                         initiatorOpenUserId,
                                         id,
                                     }: {
        initiatorOpenUserId: number
        id: number
    }): Promise<MediaFileDto> {
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
        
        if (oldDto.file) {
            try {
                await FileService.delete({
                    filePath: oldDto.file,
                })
            } catch (error) {
                appLogger.error('error delete media folder file', error)
            }
        }
        await this.actionsLoggerService.logDeleteAction({
            oldValue: oldDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: id,
        })
        
        return oldDto
    }
    
    public async deleteByFolderId({
                                      initiatorOpenUserId,
                                      folderId,
                                  }: {
        initiatorOpenUserId: number
        folderId: number
    }): Promise<number> {
        
        const mediaFilesDtoList = await this.repository.findAll({ folder_id: folderId })
        
        if (!mediaFilesDtoList.length) {
            return 0
        }
        let res: number = 0
        
        for (const mediaFolderDto of mediaFilesDtoList) {
            try {
                await this.repository.destroy({
                    id: mediaFolderDto.id,
                })
            } catch (error) {
                appLogger.error('error delete media folder', error)
            }
            if (mediaFolderDto.file) {
                try {
                    await FileService.delete({
                        filePath: mediaFolderDto.file,
                    })
                } catch (error) {
                    appLogger.error('error delete media folder file', error)
                }
            }
            await this.actionsLoggerService.logDeleteAction({
                oldValue: mediaFolderDto,
                openUserId: initiatorOpenUserId,
                config: this.repository.getConfig(),
                rowId: mediaFolderDto.id,
            })
            res++
        }
        
        return res
    }
    
}
