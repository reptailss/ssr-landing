import { ActionsLoggerService, AppError, AppFile, appLogger, FileService } from 'os-core-ts'
import { mediaFilesModel, MediaFilesModel } from '@modules/mediaLibrary/mediaFiles/model'
import { MediaFileDto, UpdateMediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { MediaFilesChecker } from '@modules/mediaLibrary/mediaFiles/checker/MediaFilesChecker'
import { UploadFilesService } from '@modules/mediaLibrary/mediaFiles/services/UploadFilesService'
import { MediaFilesMapper } from '@modules/mediaLibrary/mediaFiles/mapper/MediaFilesMapper'

export class UpdateMediaFileService {
    
    private readonly mediaFilesMapper = new MediaFilesMapper()
    
    constructor(
        private readonly model: MediaFilesModel = mediaFilesModel,
        private readonly mediaFilesChecker: MediaFilesChecker = new MediaFilesChecker(),
        private readonly uploadFilesService: UploadFilesService = new UploadFilesService(),
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
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
        file: AppFile | null
    }): Promise<MediaFileDto> {
        
        
        const oldDto = await this.model.findByPk(id)
        
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
        
        const newDto = await this.model.update(this.mediaFilesMapper.updateMediaFileDtoToEntity({
            updateDto,
            file: filePath,
            mimetype,
        }), {
            filters: { id: oldDto.id },
            returning: true,
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
            config: this.model.getConfig(),
            rowId: oldDto.id,
        })
        
        return newDto
    }
}
