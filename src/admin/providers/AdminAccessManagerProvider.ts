import { AdminAuthRequest, IAccessManagerProvider } from 'admin-panel-builder'
import { AdminServerApiUrlBuilder } from '@admin-helpers/AdminServerApiUrlBuilder'
import { AppUserDto } from '@common/dto/userDto'
import { USER_ACCESS_ROUTE_PATHS } from '@common/apiRoutePaths/userAccessRoutePaths'
import { UserAccessResponse } from '@common/apiResponses/userAccessResponses'
import { ALL_USER_ROLES } from '@common/userRoles'
import { USERS_ROUTE_PATHS } from '@common/apiRoutePaths/usersRoutePaths'
import { UsersListResponse } from '@common/apiResponses/usersResponses'


export class AccessProvider implements IAccessManagerProvider<AppUserDto> {
    public async saveUserRoles({
                                   roles,
                                   token,
                                   userDto,
                               }: {
        roles: string[]
        token: string | null
        userDto: AppUserDto
    }): Promise<void> {
        await AdminAuthRequest.post({
            url: AdminServerApiUrlBuilder.build(USER_ACCESS_ROUTE_PATHS.save),
            token: token || '',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                open_user_id: userDto.open_user_id,
                roles,
                
            }),
        })
    }
    
    public async deleteUserRoles({
                                     token,
                                     userDto,
                                 }: {
        token: string | null
        userDto: AppUserDto
    }): Promise<void> {
        await AdminAuthRequest.delete({
            url: AdminServerApiUrlBuilder.build(USER_ACCESS_ROUTE_PATHS.deleteByOpenUserId),
            token: token || '',
            pathParams: {
                open_user_id: userDto.open_user_id,
            },
        })
    }
    
    public async getUserRoles({
                                  token,
                                  userDto,
                              }: {
        token: string | null
        userDto: AppUserDto
    }): Promise<{
        roles: string[]
    }> {
        try {
            const res: UserAccessResponse = await AdminAuthRequest.get({
                url: AdminServerApiUrlBuilder.build(USER_ACCESS_ROUTE_PATHS.getByOpenUserId),
                token: token || '',
                pathParams: {
                    open_user_id: userDto.open_user_id,
                },
            })
            return {
                roles: res.row.roles,
            }
        } catch (error) {
            return {
                roles: [],
            }
        }
    }
    
    public async getAllRoles(props: {
        token: string | null;
    }) {
        return {
            roles: ALL_USER_ROLES as unknown as string[],
        }
    }
    
    public async getUsers({
                              token,
                          }: {
        token: string | null
    }): Promise<AppUserDto[]> {
        const res: UsersListResponse = await AdminAuthRequest.get({
            url: AdminServerApiUrlBuilder.build(USERS_ROUTE_PATHS.list),
            token: token || '',
            searchParams: {
                page: '1',
                per_page: '0',
            },
        })
        return res.rows
    }
    
}