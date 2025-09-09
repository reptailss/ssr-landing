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
import { UsersValidator } from '@modules/users/validator/UsersValidator'
import { CreateUserDto } from '@common/dto/userDto'
import { USERS_ROUTE_PATHS } from '@common/apiRoutePaths/usersRoutePaths'
import { SaveUserService } from '@modules/users/services/SaveUserService'

const usersValidator = new UsersValidator()

const createUserBodySchema = usersValidator.getCreateUserDtoSchema()

@ControllerDec()
export class SaveUserController {
    constructor(private readonly saveUserService: SaveUserService = new SaveUserService()) {
    }
    
    @SwaggerInfoDec({ summary: 'save user' })
    @PostDec(USERS_ROUTE_PATHS.save)
    public async createUser(
        @BodyDec(createUserBodySchema) body: CreateUserDto,
        @AuthDec userInfo: UserInfo,
    ): Promise<MutateRowResult<number>> {
        const newDto = await this.saveUserService.saveUser({
            initiatorOpenUserId: userInfo.open_user_id,
            createDto: body,
            openUserId: userInfo.open_user_id,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
