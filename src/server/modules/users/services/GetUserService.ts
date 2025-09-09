import { usersModel, UsersModel } from '@modules/users/model'
import { UserDto } from '@common/dto/userDto'

export class GetUserService {
    constructor(private readonly model: UsersModel = usersModel) {
    }
    
    public async getUserByOpenUserId(openUserId: number): Promise<UserDto | null> {
        return this.model.findOne({
            filters: {
                open_user_id: openUserId,
            },
        })
    }
}
