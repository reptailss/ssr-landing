import { GetUserAccessService } from '@modules/userAccess/services/GetUserAccessService'
import { AppError } from 'os-core-ts'
import { ADMINS_USER_ROLES, USER_ROLES } from '@common/userRoles'

export class CheckUserAccessService {
    
    constructor(private readonly getUserAccessService = new GetUserAccessService()) {
    }
    
    
    public async checkIsAdmins(openUserId: number): Promise<void> {
        await this.checkByOpenUserId({
            openUserId,
            roles: ADMINS_USER_ROLES as unknown as string[],
        })
    }
    
    public async checkIsSuperAdmin(openUserId: number): Promise<void> {
        await this.checkByOpenUserId({
            openUserId,
            roles: [
                USER_ROLES.superAdmin,
            ],
        })
    }
    
    public async checkByOpenUserId({
                                       openUserId,
                                       roles,
                                   }: {
        openUserId: number
        roles: string[]
    }): Promise<void> {
        const userAccessDto = await this.getUserAccessService.getUserAccessByOpenUserId(openUserId)
        if (!userAccessDto) {
            throw new AppError('Access denied', {
                errorKey: 'UNAUTHORIZED_ERROR',
            })
        }
        const hasAccess = userAccessDto.roles.some((role) => roles.includes(role))
        
        if (!hasAccess) {
            throw new AppError('Access denied', {
                errorKey: 'UNAUTHORIZED_ERROR',
            })
        }
    }
}