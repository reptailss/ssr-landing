import { ActionsLoggerService, AppError, appLogger, FileService } from 'os-core-ts'
import { MediaFilesModel, mediaFilesModel } from '@modules/mediaLibrary/mediaFiles/model'
import { MediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'

export class DeleteMediaFileService {
    constructor(
        private readonly model: MediaFilesModel = mediaFilesModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async deleteMediaFileById({
                                         initiatorOpenUserId,
                                         id,
                                     }: {
        initiatorOpenUserId: number
        id: number
    }): Promise<MediaFileDto> {
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
            config: this.model.getConfig(),
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
        
        const mediaFilesDtoList = await this.model.findAll({
            filters: {
                folder_id: folderId,
            },
        })
        if (!mediaFilesDtoList.length) {
            return 0
        }
        let res: number = 0
        
        for (const mediaFolderDto of mediaFilesDtoList) {
            try {
                await this.model.destroy({
                    filters: {
                        id: mediaFolderDto.id,
                    },
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
                config: this.model.getConfig(),
                rowId: mediaFolderDto.id,
            })
            res++
        }
        
        return res
    }
    
}
