import { ActionsLoggerService } from 'os-core-ts'
import { usersModel, UsersModel } from '@modules/users/model'
import { CreateUserDto, UserDto } from '@common/dto/userDto'
import { UsersMapper } from '@modules/users/mapper/UsersMapper'

export class CreateUserService {
    
    private readonly usersMapper = new UsersMapper()
    
    constructor(
        private readonly model: UsersModel = usersModel,
    ) {
    }
    
    public async createUser({
                                initiatorOpenUserId,
                                createDto,
                                openUserId,
                            }: {
        initiatorOpenUserId: number
        createDto: CreateUserDto
        openUserId: number
    }): Promise<UserDto> {
        return await this.model.create(this.usersMapper.createUserDtoToEntity({
            createDto,
            openUserId,
        }))
    }
}
