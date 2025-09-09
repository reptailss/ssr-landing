import { usersModel, UsersModel } from '@modules/users/model'
import { UpdateUserDto, UserDto } from '@common/dto/userDto'

export class UpdateUserService {
    
    constructor(
        private readonly model: UsersModel = usersModel,
    ) {
    }
    
    public async updateUser({
                                initiatorOpenUserId,
                                updateDto,
                                oldDto,
                            }: {
        initiatorOpenUserId: number
        updateDto: UpdateUserDto
        oldDto: UserDto
    }): Promise<UserDto> {
        
        return await this.model.update(updateDto, {
            filters: { id: oldDto.id },
            returning: true,
        })
    }
}
