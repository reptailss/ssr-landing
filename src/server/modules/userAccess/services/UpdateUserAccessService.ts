import { ActionsLoggerService } from 'os-core-ts'
import { userAccessModel, UserAccessModel } from '@modules/userAccess/model'
import { UpdateUserAccessDto, UserAccessDto } from '@common/dto/userAccessDto'
import { UserAccessMapper } from '@modules/userAccess/mapper/UserAccessMapper'

export class UpdateUserAccessService {
    
    private readonly userAccessMapper = new UserAccessMapper()
    
    constructor(
        private readonly model: UserAccessModel = userAccessModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async updateUserAccess({
                                      initiatorOpenUserId,
                                      updateDto,
                                      oldDto,
                                  }: {
        initiatorOpenUserId: number
        updateDto: UpdateUserAccessDto
        oldDto: UserAccessDto
    }): Promise<UserAccessDto> {
        
        const newDto = await this.model.update(this.userAccessMapper.updateUserAccessDtoToEntity({
            updateDto,
            authorOpenUserId: initiatorOpenUserId,
        }), {
            filters: { id: oldDto.id },
            returning: true,
        })
        
        await this.actionsLoggerService.logUpdateAction({
            oldValue: oldDto,
            newValue: newDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: oldDto.id,
        })
        
        return newDto
    }
}
