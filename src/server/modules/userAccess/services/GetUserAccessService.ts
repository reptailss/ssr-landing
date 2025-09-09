import { userAccessModel, UserAccessModel } from '@modules/userAccess/model'
import { UserAccessDto } from '@common/dto/userAccessDto'

export class GetUserAccessService {
    constructor(private readonly model: UserAccessModel = userAccessModel) {
    }
    
    public async getUserAccessByOpenUserId(openUserId: number): Promise<UserAccessDto | null> {
        return this.model.findOne({
            filters: {
                open_user_id: openUserId,
            },
        })
    }
}
