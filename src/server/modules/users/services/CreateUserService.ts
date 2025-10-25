import { AppUserDto, CreateAppUserDto } from '@common/dto/userDto'
import { Injectable } from 'os-core-ts'
import { UserEntityRepository } from '@modules/users/repository'

@Injectable()
export class CreateUserService {
    
    constructor(
        private readonly repository: UserEntityRepository,
    ) {
    }
    
    public async createUser({
                                initiatorOpenUserId,
                                createDto,
                                openUserId,
                            }: {
        initiatorOpenUserId: number
        createDto: CreateAppUserDto
        openUserId: number
    }): Promise<AppUserDto> {
        return await this.repository.create(
            createDto,
            openUserId,
        )
    }
}
