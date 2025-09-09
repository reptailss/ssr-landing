import { PaginationQueryParams, PaginationValues } from 'os-core-ts'
import { usersModel, UsersModel } from '@modules/users/model'
import { UserDto } from '@common/dto/userDto'

export class GetAllUsersService {
    constructor(private readonly model: UsersModel = usersModel) {
    }
    
    public async getUsersPagination(
        params: PaginationQueryParams<UserDto>,
    ): Promise<PaginationValues<UserDto>> {
        return this.model.pagination(params)
    }
}
