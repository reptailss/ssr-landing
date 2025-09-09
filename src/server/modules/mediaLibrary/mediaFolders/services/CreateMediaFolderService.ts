import { ActionsLoggerService } from 'os-core-ts'
import { MediaFoldersMapper } from '@modules/mediaLibrary/mediaFolders/mapper/MediaFoldersMapper'
import { MediaFoldersChecker } from '@modules/mediaLibrary/mediaFolders/checker/MediaFoldersChecker'
import { MediaFoldersModel, mediaFoldersModel } from '@modules/mediaLibrary/mediaFolders/model'
import { CreateMediaFolderDto, MediaFolderDto } from '@common/dto/mediaFolderDto'

export class CreateMediaFolderService {
    
    private readonly mediaFoldersMapper = new MediaFoldersMapper()
    
    constructor(
        private readonly model: MediaFoldersModel = mediaFoldersModel,
        private readonly mediaFoldersChecker: MediaFoldersChecker = new MediaFoldersChecker(),
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async createMediaFolder({
                                       initiatorOpenUserId,
                                       createDto,
                                   }: {
        initiatorOpenUserId: number
        createDto: CreateMediaFolderDto
    }): Promise<MediaFolderDto> {
        
        await this.mediaFoldersChecker.checkParentId(createDto.parent_id)
        
        await this.mediaFoldersChecker.checkUniqFields({
            parentId: createDto.parent_id,
            name: createDto.name,
        })
        
        const newDto = await this.model.create(this.mediaFoldersMapper.createMediaFolderDtoToEntity({
            createDto,
            openUserId: initiatorOpenUserId,
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
