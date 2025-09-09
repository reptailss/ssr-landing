import { GetUserAccessService } from '@modules/userAccess/services/GetUserAccessService'
import { CreateUserAccessService } from '@modules/userAccess/services/CreateUserAccessService'
import { UpdateUserAccessService } from '@modules/userAccess/services/UpdateUserAccessService'
import { USER_ROLES } from '@common/userRoles'

export class InitUserAccessService {
    
    constructor(
        private readonly getUserAccessService: GetUserAccessService = new GetUserAccessService(),
        private readonly createUserAccessService: CreateUserAccessService = new CreateUserAccessService(),
        private readonly updateUserAccessService: UpdateUserAccessService = new UpdateUserAccessService(),
    ) {
    }
    
    public async addSuperAdminAccessToUsers(openUserIds: number[]): Promise<void> {
        if (!openUserIds.length) {
            return
        }
        for (const openUserId of openUserIds) {
            const oldUserAccessDto = await this.getUserAccessService.getUserAccessByOpenUserId(openUserId)
            if (!oldUserAccessDto) {
                await this.createUserAccessService.createUserAccess({
                    initiatorOpenUserId: openUserId,
                    createDto: {
                        roles: [USER_ROLES.superAdmin],
                        open_user_id: openUserId,
                    },
                })
                continue
            }
            if (oldUserAccessDto.roles.includes(USER_ROLES.superAdmin)) {
                continue
            }
            const newRoles = [...new Set([
                ...oldUserAccessDto.roles,
                USER_ROLES.superAdmin,
            ])]
            await this.updateUserAccessService.updateUserAccess({
                initiatorOpenUserId: openUserId,
                oldDto: oldUserAccessDto,
                updateDto: {
                    roles: newRoles,
                },
            })
        }
    }
}