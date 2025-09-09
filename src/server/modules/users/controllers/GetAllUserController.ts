import {
    BuildResponseFormat,
    ControllerDec,
    GetDec,
    PaginationQueryParams,
    PaginationQueryParamsDec,
    PaginationResult,
    SwaggerInfoDec,
} from 'os-core-ts'
import { UsersValidator } from '@modules/users/validator/UsersValidator'
import { GetAllUsersService } from '@modules/users/services/GetAllUsersService'
import { UserDto } from '@common/dto/userDto'
import { USERS_ROUTE_PATHS } from '@common/apiRoutePaths/usersRoutePaths'

const usersValidator = new UsersValidator()
const userDtoPaginationQueryParamsSchema = usersValidator.getUserDtoPaginationQueryParamsSchema()

@ControllerDec()
export class GetAllUserController {
    constructor(
        private readonly getAllUserService: GetAllUsersService = new GetAllUsersService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Get users list' })
    @GetDec(USERS_ROUTE_PATHS.list)
    public async getUsersPagination(
        @PaginationQueryParamsDec(userDtoPaginationQueryParamsSchema)
        params: PaginationQueryParams<UserDto>,
    ): Promise<PaginationResult<UserDto>> {
        const paginationValues = await this.getAllUserService.getUsersPagination(params)
        return BuildResponseFormat.pagination(paginationValues)
    }
}
