import { Injectable, PaginationQueryParams, PaginationValues } from 'os-core-ts'
import { AppUserDto } from '@common/dto/userDto'
import { UserEntityRepository } from '@modules/users/repository'

@Injectable()
export class GetAllUsersService {
    constructor(
        private readonly repository: UserEntityRepository,
    ) {
    }
    
    public async getUsersPagination(
        params: PaginationQueryParams<AppUserDto>,
    ): Promise<PaginationValues<AppUserDto>> {
        return this.repository.pagination(params)
    }
}
