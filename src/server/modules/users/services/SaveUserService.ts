import { AppUserDto, CreateAppUserDto } from '@common/dto/userDto'
import { GetUserService } from '@modules/users/services/GetUserService'
import { CreateUserService } from '@modules/users/services/CreateUserService'
import { UpdateUserService } from '@modules/users/services/UpdateUserService'
import { Injectable } from 'os-core-ts'

@Injectable()
export class SaveUserService {
    constructor(
        private readonly getUserService: GetUserService,
        private readonly createUserService: CreateUserService,
        private readonly updateUserService: UpdateUserService,
    ) {
    }
    
    public async saveUser({
                              initiatorOpenUserId,
                              createDto,
                              openUserId,
                          }: {
        initiatorOpenUserId: number
        createDto: CreateAppUserDto
        openUserId: number
    }): Promise<AppUserDto> {
        
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
