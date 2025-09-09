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
import { DeleteUserAccessService } from '@modules/userAccess/services/DeleteUserAccessService'
import { USER_ACCESS_ROUTE_PATHS } from '@common/apiRoutePaths/userAccessRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@ControllerDec()
export class DeleteUserAccessController {
    constructor(
        private readonly deleteUserAccessService: DeleteUserAccessService = new DeleteUserAccessService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Delete user-access' })
    @DeleteDec(USER_ACCESS_ROUTE_PATHS.deleteByOpenUserId)
    public async deleteUserAccess(
        @AuthDec userInfo: UserInfo,
        @ParamNumDec('open_user_id') openUserId: number,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsSuperAdmin(userInfo.open_user_id)
        
        const oldDto = await this.deleteUserAccessService.deleteUserByOpenUserId({
            initiatorOpenUserId: userInfo.open_user_id,
            openUserId,
        })
        return BuildResponseFormat.mutateRow(oldDto.id)
    }
}
