import {
    BuildResponseFormat,
    Controller,
    Delete,
    MutateRowResult,
    Param,
    SwaggerInfo,
    User,
    UserDto,
} from 'os-core-ts'
import { DeleteUserService } from '@modules/users/services/DeleteUserService'
import { USERS_ROUTE_PATHS } from '@common/apiRoutePaths/usersRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@Controller()
export class DeleteUserController {
    constructor(
        private readonly deleteUserService: DeleteUserService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Delete user' })
    @Delete(USERS_ROUTE_PATHS.deleteByOpenId)
    public async deleteUserByOpenId(
        @User() userDto: UserDto,
        @Param('open_user_id') openUserId: number,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const oldDto = await this.deleteUserService.deleteUserByOpenId({
            initiatorOpenUserId: userDto.open_user_id,
            openUserId,
        })
        return BuildResponseFormat.mutateRow(oldDto.id)
    }
}
