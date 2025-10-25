import { ActionsLoggerService, Injectable } from 'os-core-ts'
import { MediaFoldersChecker } from '@modules/mediaLibrary/mediaFolders/checker/MediaFoldersChecker'
import { CreateMediaFolderDto, MediaFolderDto } from '@common/dto/mediaFolderDto'
import { MediaFoldersRepository } from '@modules/mediaLibrary/mediaFolders/repository'

@Injectable()
export class CreateMediaFolderService {
    
    
    constructor(
        private readonly repository: MediaFoldersRepository,
        private readonly mediaFoldersChecker: MediaFoldersChecker,
        private readonly actionsLoggerService: ActionsLoggerService,
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
        
        const newDto = await this.repository.create(
            createDto,
            initiatorOpenUserId,
        )
        
        await this.actionsLoggerService.logCreateAction({
            value: newDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: newDto.id,
        })
        
        return newDto
    }
}
