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
import { DeleteUserAccessService } from '@modules/userAccess/services/DeleteUserAccessService'
import { USER_ACCESS_ROUTE_PATHS } from '@common/apiRoutePaths/userAccessRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@Controller()
export class DeleteUserAccessController {
    constructor(
        private readonly deleteUserAccessService: DeleteUserAccessService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Delete user-access' })
    @Delete(USER_ACCESS_ROUTE_PATHS.deleteByOpenUserId)
    public async deleteUserAccess(
        @User() userDto: UserDto,
        @Param('open_user_id') openUserId: number,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsSuperAdmin(userDto.open_user_id)
        
        const oldDto = await this.deleteUserAccessService.deleteUserByOpenUserId({
            initiatorOpenUserId: userDto.open_user_id,
            openUserId,
        })
        return BuildResponseFormat.mutateRow(oldDto.id)
    }
}
