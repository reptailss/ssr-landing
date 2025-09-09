import { ActionsLoggerService, AppError } from 'os-core-ts'
import { userAccessModel, UserAccessModel } from '@modules/userAccess/model'

export class DeleteUserAccessService {
    constructor(
        private readonly model: UserAccessModel = userAccessModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    
    public async deleteUserByOpenUserId({
                                            initiatorOpenUserId,
                                            openUserId,
                                        }: {
        initiatorOpenUserId: number
        openUserId: number
    }) {
        const oldDto = await this.model.findOne({
            filters: {
                open_user_id: openUserId,
            },
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
