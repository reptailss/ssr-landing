import { CreateUserDto, UserDto } from '@common/dto/userDto'
import { GetUserService } from '@modules/users/services/GetUserService'
import { CreateUserService } from '@modules/users/services/CreateUserService'
import { UpdateUserService } from '@modules/users/services/UpdateUserService'

export class SaveUserService {
    constructor(
        private readonly getUserService: GetUserService = new GetUserService(),
        private readonly createUserService: CreateUserService = new CreateUserService(),
        private readonly updateUserService: UpdateUserService = new UpdateUserService(),
    ) {
    }
    
    public async saveUser({
                              initiatorOpenUserId,
                              createDto,
                              openUserId,
                          }: {
        initiatorOpenUserId: number
        createDto: CreateUserDto
        openUserId: number
    }): Promise<UserDto> {
        
        const oldDto = await this.getUserService.getUserByOpenUserId(openUserId)
        
        if (!oldDto) {
            return this.createUserService.createUser({
                createDto,
                initiatorOpenUserId,
                openUserId,
            })
        }
        return this.updateUserService.updateUser({
            initiatorOpenUserId,
            updateDto: createDto,
            oldDto,
        })
    }
}
