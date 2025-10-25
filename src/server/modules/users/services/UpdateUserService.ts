import { AppUserDto, UpdateAppUserDto } from '@common/dto/userDto'
import { UserEntityRepository } from '@modules/users/repository'
import { Injectable } from 'os-core-ts'

@Injectable()
export class UpdateUserService {
    
    constructor(
        private readonly repository: UserEntityRepository,
    ) {
    }
    
    public async updateUser({
                                initiatorOpenUserId,
                                updateDto,
                                oldDto,
                            }: {
        initiatorOpenUserId: number
        updateDto: UpdateAppUserDto
        oldDto: AppUserDto
    }): Promise<AppUserDto> {
        
        return await this.repository.update(updateDto, {
            id: oldDto.id,
        })
    }
}
