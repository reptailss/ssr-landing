import { Body, BuildResponseFormat, Controller, MutateRowResult, Post, SwaggerInfo, User, UserDto } from 'os-core-ts'
import { UserAccessValidator } from '@modules/userAccess/validator/UserAccessValidator'
import { CreateUserAccessDto } from '@common/dto/userAccessDto'
import { USER_ACCESS_ROUTE_PATHS } from '@common/apiRoutePaths/userAccessRoutePaths'
import { SaveUserAccessService } from '@modules/userAccess/services/SaveUserAccessService'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

const userAccessValidator = new UserAccessValidator()

const createUserAccessBodySchema = userAccessValidator.getCreateUserAccessDtoSchema()

@Controller()
export class SaveUserAccessController {
    constructor(
        private readonly saveUserAccessService: SaveUserAccessService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Save user-access' })
    @Post(USER_ACCESS_ROUTE_PATHS.save)
    public async createUserAccess(
        @Body(createUserAccessBodySchema) body: CreateUserAccessDto,
        @User() userDto: UserDto,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsSuperAdmin(userDto.open_user_id)
        
        const newDto = await this.saveUserAccessService.saveUserAccess({
            initiatorOpenUserId: userDto.open_user_id,
            createDto: body,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
