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
import { DeleteUserService } from '@modules/users/services/DeleteUserService'
import { USERS_ROUTE_PATHS } from '@common/apiRoutePaths/usersRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@ControllerDec()
export class DeleteUserController {
    constructor(
        private readonly deleteUserService: DeleteUserService = new DeleteUserService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Delete user' })
    @DeleteDec(USERS_ROUTE_PATHS.deleteByOpenId)
    public async deleteUserByOpenId(
        @AuthDec userInfo: UserInfo,
        @ParamNumDec('open_user_id') openUserId: number,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const oldDto = await this.deleteUserService.deleteUserByOpenId({
            initiatorOpenUserId: userInfo.open_user_id,
            openUserId,
        })
        return BuildResponseFormat.mutateRow(oldDto.id)
    }
}
