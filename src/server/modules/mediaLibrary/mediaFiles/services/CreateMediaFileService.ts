import { ActionsLoggerService, AppFile, FileService } from 'os-core-ts'
import { CreateMediaFileDto, MediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { MediaFilesChecker } from '@modules/mediaLibrary/mediaFiles/checker/MediaFilesChecker'
import { MediaFilesMapper } from '@modules/mediaLibrary/mediaFiles/mapper/MediaFilesMapper'
import { mediaFilesModel, MediaFilesModel } from '@modules/mediaLibrary/mediaFiles/model'
import { UploadFilesService } from '@modules/mediaLibrary/mediaFiles/services/UploadFilesService'

export class CreateMediaFileService {
    
    private readonly mediaFilesMapper = new MediaFilesMapper()
    
    constructor(
        private readonly model: MediaFilesModel = mediaFilesModel,
        private readonly mediaFilesChecker: MediaFilesChecker = new MediaFilesChecker(),
        private readonly uploadFilesService: UploadFilesService = new UploadFilesService(),
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async createMediaFileByFile({
                                           initiatorOpenUserId,
                                           createDto,
                                           file,
                                       }: {
        initiatorOpenUserId: number
        createDto: CreateMediaFileDto
        file: AppFile
    }): Promise<MediaFileDto> {
        
        await this.mediaFilesChecker.checkFolderId(createDto.folder_id)
        
        await this.mediaFilesChecker.checkUniqFields({
            name: createDto.name,
            folderId: createDto.folder_id,
        })
        
        const { filePath } = await this.uploadFilesService.saveFile(file)
        
        return FileService.deleteFilesOnError({
            filePaths: [filePath],
            cb: async () => {
                return this.createMediaFileByFilePath({
                    initiatorOpenUserId,
                    createDto,
                    filePath,
                    mimetype: file.mimetype,
                })
            },
        })
        
    }
    
    private async createMediaFileByFilePath({
                                                initiatorOpenUserId,
                                                createDto,
                                                filePath,
                                                mimetype,
                                            }: {
        initiatorOpenUserId: number
        createDto: CreateMediaFileDto
        filePath: string
        mimetype: string | null
    }): Promise<MediaFileDto> {
        
        const newDto = await this.model.create(this.mediaFilesMapper.createMediaFileDtoToEntity({
            createDto,
            openUserId: initiatorOpenUserId,
            file: filePath,
            mimetype,
        }))
        await this.actionsLoggerService.logCreateAction({
            value: newDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: newDto.id,
        })
        
        return newDto
    }
}
