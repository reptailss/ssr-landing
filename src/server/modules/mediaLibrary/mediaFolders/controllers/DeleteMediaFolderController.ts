import {
    User,
    BuildResponseFormat,
    Controller,
    Delete,
    MutateRowResult,
    Param,
    SwaggerInfo,
    UserDto,
} from 'os-core-ts'
import { DeleteMediaFolderService } from '@modules/mediaLibrary/mediaFolders/services/DeleteMediaFolderService'
import { MEDIA_FOLDERS_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFoldersRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@Controller()
export class DeleteMediaFolderController {
    constructor(
        private readonly deleteMediaFolderService: DeleteMediaFolderService ,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Delete media-folder' })
    @Delete(MEDIA_FOLDERS_ROUTE_PATHS.delete)
    public async deleteMediaFolder(
        @User() userDto: UserDto,
        @Param('id') id: number,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const { mediaFolderDto } = await this.deleteMediaFolderService.deleteMediaFolderByIdWithChild({
            initiatorOpenUserId: userDto.open_user_id,
            id,
        })
        
        return BuildResponseFormat.mutateRow(mediaFolderDto.id)
    }
}
