import {
    BuildResponseFormat,
    Controller,
    Get,
    PaginationQueryParams,
    PaginationParams,
    PaginationResult,
    SwaggerInfo,
} from 'os-core-ts'
import { UsersValidator } from '@modules/users/validator/UsersValidator'
import { GetAllUsersService } from '@modules/users/services/GetAllUsersService'
import { AppUserDto } from '@common/dto/userDto'
import { USERS_ROUTE_PATHS } from '@common/apiRoutePaths/usersRoutePaths'

const usersValidator = new UsersValidator()
const userDtoPaginationQueryParamsSchema = usersValidator.getAppUserDtoPaginationQueryParamsSchema()

@Controller()
export class GetAllUserController {
    constructor(
        private readonly getAllUserService: GetAllUsersService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Get users list' })
    @Get(USERS_ROUTE_PATHS.list)
    public async getUsersPagination(
        @PaginationParams(userDtoPaginationQueryParamsSchema)
        params: PaginationQueryParams<AppUserDto>,
    ): Promise<PaginationResult<AppUserDto>> {
        const paginationValues = await this.getAllUserService.getUsersPagination(params)
        return BuildResponseFormat.pagination(paginationValues)
    }
}
