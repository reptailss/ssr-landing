import { ActionsLoggerService, AppError, Injectable } from 'os-core-ts'
import { MediaFoldersChecker } from '@modules/mediaLibrary/mediaFolders/checker/MediaFoldersChecker'
import { MediaFolderDto, UpdateMediaFolderDto } from '@common/dto/mediaFolderDto'
import { MediaFoldersRepository } from '@modules/mediaLibrary/mediaFolders/repository'

@Injectable()
export class UpdateMediaFolderService {
    constructor(
        private readonly repository: MediaFoldersRepository,
        private readonly mediaFoldersChecker: MediaFoldersChecker,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    public async updateMediaFolder({
                                       initiatorOpenUserId,
                                       updateDto,
                                       id,
                                   }: {
        initiatorOpenUserId: number
        updateDto: UpdateMediaFolderDto
        id: number
    }): Promise<MediaFolderDto> {
        
        
        const oldDto = await this.repository.findByPk(id)
        
        if (!oldDto) {
            throw new AppError('Not found.', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        
        if (typeof updateDto.parent_id !== 'undefined') {
            await this.mediaFoldersChecker.checkParentId(updateDto.parent_id)
        }
        
        if (
            typeof updateDto.parent_id !== 'undefined' ||
            typeof updateDto.name !== 'undefined'
        ) {
            await this.mediaFoldersChecker.checkUniqFields({
                parentId: typeof updateDto.parent_id !== 'undefined' ? updateDto.parent_id : oldDto.parent_id,
                name: typeof updateDto.name !== 'undefined' ? updateDto.name : oldDto.name,
            })
        }
        
        
        const newDto = await this.repository.update(updateDto, {
            id,
        })
        await this.actionsLoggerService.logUpdateAction({
            oldValue: oldDto,
            newValue: newDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: id,
        })
        
        return newDto
    }
}
