import {
    AppError,
    AuthDec,
    BuildResponseFormat,
    ControllerDec,
    GetDec,
    ParamNumDec,
    SwaggerInfoDec,
    UserInfo,
} from 'os-core-ts'
import { GetUserAccessService } from '@modules/userAccess/services/GetUserAccessService'
import { USER_ACCESS_ROUTE_PATHS } from '@common/apiRoutePaths/userAccessRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'
import { UserAccessResponse } from '@common/apiResponses/userAccessResponses'

@ControllerDec()
export class GetUserAccessController {
    constructor(
        private readonly getUserAccessService: GetUserAccessService = new GetUserAccessService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Get user-access by id' })
    @GetDec(USER_ACCESS_ROUTE_PATHS.getByOpenUserId)
    public async getUserAccessByOpenUserId(
        @AuthDec userInfo: UserInfo,
        @ParamNumDec('open_user_id') openUserId: number,
    ): Promise<UserAccessResponse> {
        
        await this.checkUserAccessService.checkIsSuperAdmin(userInfo.open_user_id)
        
        const dto = await this.getUserAccessService.getUserAccessByOpenUserId(openUserId)
        if (!dto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        return BuildResponseFormat.row(dto)
    }
    
    @SwaggerInfoDec({ summary: 'Get user-access' })
    @GetDec(USER_ACCESS_ROUTE_PATHS.get)
    public async getUserAccess(
        @AuthDec userInfo: UserInfo,
    ): Promise<UserAccessResponse> {
        
        const dto = await this.getUserAccessService.getUserAccessByOpenUserId(userInfo.open_user_id)
        if (!dto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        return BuildResponseFormat.row(dto)
    }
}
