import { ActionsLoggerService, AppError } from 'os-core-ts'
import { mediaFoldersModel, MediaFoldersModel } from '@modules/mediaLibrary/mediaFolders/model'
import { MediaFoldersChecker } from '@modules/mediaLibrary/mediaFolders/checker/MediaFoldersChecker'
import { MediaFolderDto, UpdateMediaFolderDto } from '@common/dto/mediaFolderDto'

export class UpdateMediaFolderService {
    constructor(
        private readonly model: MediaFoldersModel = mediaFoldersModel,
        private readonly mediaFoldersChecker: MediaFoldersChecker = new MediaFoldersChecker(),
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
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
        
        
        const oldDto = await this.model.findByPk(id)
        
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
        
        
        const newDto = await this.model.update(updateDto, {
            filters: { id: id },
            returning: true,
        })
        await this.actionsLoggerService.logUpdateAction({
            oldValue: oldDto,
            newValue: newDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: id,
        })
        
        return newDto
    }
}
