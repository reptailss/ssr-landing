import {
    Body,
    BuildResponseFormat,
    Controller,
    MutateRowResult,
    Param,
    Put,
    SwaggerInfo,
    User,
    UserDto,
} from 'os-core-ts'
import { MediaFoldersValidator } from '@modules/mediaLibrary/mediaFolders/validator/MediaFoldersValidator'
import { UpdateMediaFolderService } from '@modules/mediaLibrary/mediaFolders/services/UpdateMediaFolderService'
import { MEDIA_FOLDERS_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFoldersRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'
import { UpdateMediaFolderDto } from '@common/dto/mediaFolderDto'

const mediaFoldersValidator = new MediaFoldersValidator()

const updateMediaFolderDtoSchema = mediaFoldersValidator.getUpdateMediaFolderDtoSchema()

@Controller()
export class UpdateMediaFolderController {
    constructor(
        private readonly updateMediaFolderService: UpdateMediaFolderService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Update media-folder by id' })
    @Put(MEDIA_FOLDERS_ROUTE_PATHS.update)
    public async updateMediaFolder(
        @Body(updateMediaFolderDtoSchema) updateDto: UpdateMediaFolderDto,
        @User() userDto: UserDto,
        @Param('id') id: number,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        
        const newDto = await this.updateMediaFolderService.updateMediaFolder({
            initiatorOpenUserId: userDto.open_user_id,
            updateDto,
            id,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
