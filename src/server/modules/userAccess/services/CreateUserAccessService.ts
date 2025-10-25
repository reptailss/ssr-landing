import { ActionsLoggerService, Injectable } from 'os-core-ts'
import { CreateUserAccessDto, UserAccessDto } from '@common/dto/userAccessDto'
import { UserAccessRepository } from '@modules/userAccess/repository'

@Injectable()
export class CreateUserAccessService {
    
    constructor(
        private readonly repository: UserAccessRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    public async createUserAccess({
                                      initiatorOpenUserId,
                                      createDto,
                                  }: {
        initiatorOpenUserId: number
        createDto: CreateUserAccessDto
    }): Promise<UserAccessDto> {
        
        
        const newDto = await this.repository.create(
            createDto,
            initiatorOpenUserId,
        )
        
        await this.actionsLoggerService.logCreateAction({
            value: newDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: newDto.id,
        })
        
        return newDto
    }
}
