import {
    AuthDec,
    BuildResponseFormat,
    ControllerDec,
    DeleteDec,
    MutateRowResult,
    ParamNumDec,
    SwaggerInfoDec,
    UserInfo,
} from 'os-core-ts'
import { DeleteMediaFolderService } from '@modules/mediaLibrary/mediaFolders/services/DeleteMediaFolderService'
import { MEDIA_FOLDERS_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFoldersRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@ControllerDec()
export class DeleteMediaFolderController {
    constructor(
        private readonly deleteMediaFolderService: DeleteMediaFolderService = new DeleteMediaFolderService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Delete media-folder' })
    @DeleteDec(MEDIA_FOLDERS_ROUTE_PATHS.delete)
    public async deleteMediaFolder(
        @AuthDec userInfo: UserInfo,
        @ParamNumDec('id') id: number,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const { mediaFolderDto } = await this.deleteMediaFolderService.deleteMediaFolderByIdWithChild({
            initiatorOpenUserId: userInfo.open_user_id,
            id,
        })
        
        return BuildResponseFormat.mutateRow(mediaFolderDto.id)
    }
}
