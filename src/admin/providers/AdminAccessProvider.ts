import { AdminAuthRequest, IAccessProvider } from 'admin-panel-builder'
import { USER_ACCESS_ROUTE_PATHS } from '@common/apiRoutePaths/userAccessRoutePaths'
import { UserAccessResponse } from '@common/apiResponses/userAccessResponses'
import { ALL_USER_ROLES } from '@common/userRoles'
import { AdminServerApiUrlBuilder } from '@admin-helpers/AdminServerApiUrlBuilder'

export class AdminAccessProvider implements IAccessProvider {
    
    public async checkAccess(token: string): Promise<{
        hasAccess: boolean
        roles: string[]
    }> {
        
        const res: UserAccessResponse = await AdminAuthRequest.get({
            url: AdminServerApiUrlBuilder.build(USER_ACCESS_ROUTE_PATHS.get),
            token,
        })
        
        return {
            hasAccess: res.row.roles.some((role) => {
                const allRoles: string[] = ALL_USER_ROLES as unknown as string[]
                return allRoles.includes(role)
            }),
            roles: res.row.roles || [],
        }
    };
}