import { ActionsLoggerService, FileService, IAppFile, Injectable } from 'os-core-ts'
import { CreateMediaFileDto, MediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { MediaFilesChecker } from '@modules/mediaLibrary/mediaFiles/checker/MediaFilesChecker'
import { UploadFilesService } from '@modules/mediaLibrary/mediaFiles/services/UploadFilesService'
import { MediaFilesRepository } from '@modules/mediaLibrary/mediaFiles/repository'

@Injectable()
export class CreateMediaFileService {
    
    constructor(
        private readonly repository: MediaFilesRepository,
        private readonly mediaFilesChecker: MediaFilesChecker,
        private readonly uploadFilesService: UploadFilesService,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    public async createMediaFileByFile({
                                           initiatorOpenUserId,
                                           createDto,
                                           file,
                                       }: {
        initiatorOpenUserId: number
        createDto: CreateMediaFileDto
        file: IAppFile
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
        
        const newDto = await this.repository.create({
            createDto,
            openUserId: initiatorOpenUserId,
            file: filePath,
            mimetype,
        })
        
        await this.actionsLoggerService.logCreateAction({
            value: newDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: newDto.id,
        })
        
        return newDto
    }
}
