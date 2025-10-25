import { ActionsLoggerService, AppError, Injectable } from 'os-core-ts'
import { UserAccessRepository } from '@modules/userAccess/repository'

@Injectable()
export class DeleteUserAccessService {
    
    constructor(
        private readonly repository: UserAccessRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    
    public async deleteUserByOpenUserId({
                                            initiatorOpenUserId,
                                            openUserId,
                                        }: {
        initiatorOpenUserId: number
        openUserId: number
    }) {
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
