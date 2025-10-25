import { ActionsLoggerService, AppError, Injectable } from 'os-core-ts'
import { AppUserDto } from '@common/dto/userDto'
import { UserEntityRepository } from '@modules/users/repository'

@Injectable()
export class DeleteUserService {
    constructor(
        private readonly repository: UserEntityRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    public async deleteUserByOpenId({
                                        initiatorOpenUserId,
                                        openUserId,
                                    }: {
        initiatorOpenUserId: number
        openUserId: number
    }): Promise<AppUserDto> {
        const oldDto = await this.repository.findOne({
            open_user_id: openUserId,
        })
        if (!oldDto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        await this.repository.destroy({
            id: oldDto.id,
        })
        
        await this.actionsLoggerService.logDeleteAction({
            oldValue: oldDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: oldDto.id,
        })
        
        return oldDto
    }
}
