import { AppUserDto } from '@common/dto/userDto'
import { UserEntityRepository } from '@modules/users/repository'
import { Injectable } from 'os-core-ts'

@Injectable()
export class GetUserService {
    constructor(
        private readonly repository: UserEntityRepository,
    ) {
    }
    
    public async getUserByOpenUserId(openUserId: number): Promise<AppUserDto | null> {
        return this.repository.findOne({
            open_user_id: openUserId,
        })
    }
}
