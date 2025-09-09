import { ActionsLoggerService } from 'os-core-ts'
import { userAccessModel, UserAccessModel } from '@modules/userAccess/model'
import { CreateUserAccessDto, UserAccessDto } from '@common/dto/userAccessDto'
import { UserAccessMapper } from '@modules/userAccess/mapper/UserAccessMapper'

export class CreateUserAccessService {
    
    private readonly userAccessMapper = new UserAccessMapper()
    
    constructor(
        private readonly model: UserAccessModel = userAccessModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async createUserAccess({
                                      initiatorOpenUserId,
                                      createDto,
                                  }: {
        initiatorOpenUserId: number
        createDto: CreateUserAccessDto
    }): Promise<UserAccessDto> {
        
        
        const newDto = await this.model.create(this.userAccessMapper.createUserAccessDtoToEntity({
            createDto,
            authorOpenUserId: initiatorOpenUserId,
        }))
        
        await this.actionsLoggerService.logCreateAction({
            value: newDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: newDto.id,
        })
        
        return newDto
    }
}
