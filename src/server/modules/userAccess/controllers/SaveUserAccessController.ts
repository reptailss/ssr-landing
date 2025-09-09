import {
    AuthDec,
    BodyDec,
    BuildResponseFormat,
    ControllerDec,
    MutateRowResult,
    PostDec,
    SwaggerInfoDec,
    UserInfo,
} from 'os-core-ts'
import { UserAccessValidator } from '@modules/userAccess/validator/UserAccessValidator'
import { CreateUserAccessDto } from '@common/dto/userAccessDto'
import { USER_ACCESS_ROUTE_PATHS } from '@common/apiRoutePaths/userAccessRoutePaths'
import { SaveUserAccessService } from '@modules/userAccess/services/SaveUserAccessService'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

const userAccessValidator = new UserAccessValidator()

const createUserAccessBodySchema = userAccessValidator.getCreateUserAccessDtoSchema()

@ControllerDec()
export class SaveUserAccessController {
    constructor(
        private readonly saveUserAccessService: SaveUserAccessService = new SaveUserAccessService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Save user-access' })
    @PostDec(USER_ACCESS_ROUTE_PATHS.save)
    public async createUserAccess(
        @BodyDec(createUserAccessBodySchema) body: CreateUserAccessDto,
        @AuthDec userInfo: UserInfo,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsSuperAdmin(userInfo.open_user_id)
        
        const newDto = await this.saveUserAccessService.saveUserAccess({
            initiatorOpenUserId: userInfo.open_user_id,
            createDto: body,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
