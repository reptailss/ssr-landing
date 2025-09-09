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
import { DeleteMediaFileService } from '@modules/mediaLibrary/mediaFiles/services/DeleteMediaFileService'
import { MEDIA_FILES_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFilesRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@ControllerDec()
export class DeleteMediaFileController {
    constructor(
        private readonly deleteMediaFileService: DeleteMediaFileService = new DeleteMediaFileService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Delete media-file' })
    @DeleteDec(MEDIA_FILES_ROUTE_PATHS.delete)
    public async deleteMediaFile(
        @AuthDec userInfo: UserInfo,
        @ParamNumDec('id') id: number,
    ): Promise<MutateRowResult<number>> {
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const oldDto = await this.deleteMediaFileService.deleteMediaFileById({
            initiatorOpenUserId: userInfo.open_user_id,
            id,
        })
        return BuildResponseFormat.mutateRow(oldDto.id)
    }
}
