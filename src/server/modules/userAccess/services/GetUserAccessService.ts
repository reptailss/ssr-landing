import { UserAccessDto } from '@common/dto/userAccessDto'
import { Injectable } from 'os-core-ts'
import { UserAccessRepository } from '@modules/userAccess/repository'

@Injectable()
export class GetUserAccessService {
    constructor(
        private readonly repository: UserAccessRepository,
    ) {
    }
    
    public async getUserAccessByOpenUserId(openUserId: number): Promise<UserAccessDto | null> {
        return this.repository.findOne({
            open_user_id: openUserId,
        })
    }
}
