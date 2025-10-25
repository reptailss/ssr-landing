import {
    User,
    Body,
    BuildResponseFormat,
    Controller,
    MutateRowResult,
    Post,
    SwaggerInfo,
    UserDto,
} from 'os-core-ts'
import { UsersValidator } from '@modules/users/validator/UsersValidator'
import { CreateAppUserDto } from '@common/dto/userDto'
import { USERS_ROUTE_PATHS } from '@common/apiRoutePaths/usersRoutePaths'
import { SaveUserService } from '@modules/users/services/SaveUserService'

const usersValidator = new UsersValidator()

const createUserBodySchema = usersValidator.getCreateAppUserDtoSchema()

@Controller()
export class SaveUserController {
    constructor(private readonly saveUserService: SaveUserService) {
    }
    
    @SwaggerInfo({ summary: 'save user' })
    @Post(USERS_ROUTE_PATHS.save)
    public async createUser(
        @Body(createUserBodySchema) body: CreateAppUserDto,
        @User() userDto: UserDto,
    ): Promise<MutateRowResult<number>> {
        const newDto = await this.saveUserService.saveUser({
            initiatorOpenUserId: userDto.open_user_id,
            createDto: body,
            openUserId: userDto.open_user_id,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
