import { ActionsLoggerService, Injectable } from 'os-core-ts'
import { UpdateUserAccessDto, UserAccessDto } from '@common/dto/userAccessDto'
import { UserAccessRepository } from '@modules/userAccess/repository'

@Injectable()
export class UpdateUserAccessService {
    
    constructor(
        private readonly repository: UserAccessRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
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
        
        const newDto = await this.repository.update(
            updateDto,
            initiatorOpenUserId,
            { id: oldDto.id },
        )
        
        await this.actionsLoggerService.logUpdateAction({
            oldValue: oldDto,
            newValue: newDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: oldDto.id,
        })
        
        return newDto
    }
}
