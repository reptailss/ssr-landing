import { ActionsLoggerService, AppError, appLogger, FileService, IAppFile, Injectable } from 'os-core-ts'
import { MediaFileDto, UpdateMediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { MediaFilesChecker } from '@modules/mediaLibrary/mediaFiles/checker/MediaFilesChecker'
import { UploadFilesService } from '@modules/mediaLibrary/mediaFiles/services/UploadFilesService'
import { MediaFilesRepository } from '@modules/mediaLibrary/mediaFiles/repository'

@Injectable()
export class UpdateMediaFileService {
    
    
    constructor(
        private readonly repository: MediaFilesRepository,
        private readonly mediaFilesChecker: MediaFilesChecker,
        private readonly uploadFilesService: UploadFilesService,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    public async updateMediaFileByFile({
                                           domain,
                                           initiatorOpenUserId,
                                           updateDto,
                                           id,
                                           file,
                                       }: {
        domain: string
        initiatorOpenUserId: number
        updateDto: UpdateMediaFileDto
        id: number
        file: IAppFile | null
    }): Promise<MediaFileDto> {
        
        
        const oldDto = await this.repository.findByPk(id)
        
        if (!oldDto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        if (typeof updateDto.folder_id !== 'undefined') {
            await this.mediaFilesChecker.checkFolderId(updateDto.folder_id)
        }
        
        if (
            typeof updateDto.folder_id === 'undefined' ||
            typeof updateDto.name === 'undefined'
        ) {
            await this.mediaFilesChecker.checkUniqFields({
                name: typeof updateDto.name !== 'undefined' ? updateDto.name : oldDto.name,
                folderId: typeof updateDto.folder_id !== 'undefined' ? updateDto.folder_id : oldDto.folder_id,
            })
        }
        
        if (!file) {
            return this.updateMediaFileByFilePath({
                initiatorOpenUserId,
                updateDto,
                filePath: '',
                oldDto,
            })
        }
        
        const { filePath } = await this.uploadFilesService.saveFile(file)
        return FileService.deleteFilesOnError({
            filePaths: [filePath],
            cb: async () => {
                return this.updateMediaFileByFilePath({
                    initiatorOpenUserId,
                    updateDto,
                    filePath,
                    oldDto,
                    mimetype: file.mimetype,
                })
            },
        })
        
    }
    
    private async updateMediaFileByFilePath({
                                                initiatorOpenUserId,
                                                updateDto,
                                                filePath,
                                                oldDto,
                                                mimetype,
                                            }: {
        initiatorOpenUserId: number
        updateDto: UpdateMediaFileDto
        oldDto: MediaFileDto
        filePath?: string
        mimetype?: string
    }): Promise<MediaFileDto> {
        
        const newDto = await this.repository.update({
            updateDto,
            file: filePath,
            mimetype,
            where: {
                id: oldDto.id,
            },
        })
        
        if (filePath && oldDto.file) {
            try {
                await FileService.delete({
                    filePath: oldDto.file,
                })
            } catch (error) {
                appLogger.error('error delete file', error)
            }
        }
        
        await this.actionsLoggerService.logUpdateAction({
            oldValue: oldDto,
            newValue: newDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: oldDto.id,
        })
        
        return newDto
    }
}
