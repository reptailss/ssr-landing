import { ActionsLoggerService, AppError } from 'os-core-ts'
import { usersModel, UsersModel } from '@modules/users/model'
import { UserDto } from '@common/dto/userDto'

export class DeleteUserService {
    constructor(
        private readonly model: UsersModel = usersModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async deleteUserByOpenId({
                                        initiatorOpenUserId,
                                        openUserId,
                                    }: {
        initiatorOpenUserId: number
        openUserId: number
    }): Promise<UserDto> {
        const oldDto = await this.model.findOne({
            filters: { open_user_id: openUserId },
        })
        if (!oldDto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        await this.model.destroy({
            filters: { id: oldDto.id },
        })
        
        await this.actionsLoggerService.logDeleteAction({
            oldValue: oldDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: oldDto.id,
        })
        
        return oldDto
    }
}
