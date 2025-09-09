import { CreateUserAccessDto, UserAccessDto } from '@common/dto/userAccessDto'
import { GetUserAccessService } from '@modules/userAccess/services/GetUserAccessService'
import { CreateUserAccessService } from '@modules/userAccess/services/CreateUserAccessService'
import { UpdateUserAccessService } from '@modules/userAccess/services/UpdateUserAccessService'
import { UserAccessChecker } from '@modules/userAccess/checker/UserAccessChecker'

export class SaveUserAccessService {
    
    constructor(
        private readonly getUserAccessService: GetUserAccessService = new GetUserAccessService(),
        private readonly createUserAccessService: CreateUserAccessService = new CreateUserAccessService(),
        private readonly updateUserAccessService: UpdateUserAccessService = new UpdateUserAccessService(),
        private readonly userAccessChecker: UserAccessChecker = new UserAccessChecker(),
    ) {
    }
    
    public async saveUserAccess({
                                    initiatorOpenUserId,
                                    createDto,
                                }: {
        initiatorOpenUserId: number
        createDto: CreateUserAccessDto
    }): Promise<UserAccessDto> {
        
        await this.userAccessChecker.checkOpenUserId(createDto.open_user_id)
        
        const oldDto = await this.getUserAccessService.getUserAccessByOpenUserId(createDto.open_user_id)
        
        if (!oldDto) {
            return this.createUserAccessService.createUserAccess({
                initiatorOpenUserId,
                createDto,
            })
        }
        
        return this.updateUserAccessService.updateUserAccess({
            initiatorOpenUserId,
            updateDto: createDto,
            oldDto,
        })
    }
}
