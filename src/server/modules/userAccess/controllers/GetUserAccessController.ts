import {
    AppError,
    User,
    BuildResponseFormat,
    Controller,
    Get,
    Param,
    SwaggerInfo,
    UserDto,
} from 'os-core-ts'
import { GetUserAccessService } from '@modules/userAccess/services/GetUserAccessService'
import { USER_ACCESS_ROUTE_PATHS } from '@common/apiRoutePaths/userAccessRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'
import { UserAccessResponse } from '@common/apiResponses/userAccessResponses'

@Controller()
export class GetUserAccessController {
    constructor(
        private readonly getUserAccessService: GetUserAccessService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Get user-access by id' })
    @Get(USER_ACCESS_ROUTE_PATHS.getByOpenUserId)
    public async getUserAccessByOpenUserId(
        @User() userDto: UserDto,
        @Param('open_user_id') openUserId: number,
    ): Promise<UserAccessResponse> {
    
        await this.checkUserAccessService.checkIsSuperAdmin(userDto.open_user_id)
        
        const dto = await this.getUserAccessService.getUserAccessByOpenUserId(openUserId)
        if (!dto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        return BuildResponseFormat.row(dto)
    }
    
    @SwaggerInfo({ summary: 'Get user-access' })
    @Get(USER_ACCESS_ROUTE_PATHS.get)
    public async getUserAccess(
        @User() userDto: UserDto,
    ): Promise<UserAccessResponse> {
        const dto = await this.getUserAccessService.getUserAccessByOpenUserId(userDto.open_user_id)
        if (!dto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        return BuildResponseFormat.row(dto)
    }
}
