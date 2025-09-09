import { CreateUserDto } from '@common/dto/userDto'
import { CreateUserEntity } from '@modules/users/model/entity'

export class UsersMapper {
    public createUserDtoToEntity({
                                     createDto,
                                     openUserId,
                                 }: {
        createDto: CreateUserDto
        openUserId: number
    }): CreateUserEntity {
        return {
            given_name: createDto.given_name,
            email: createDto.email,
            open_user_id: openUserId,
            family_name: createDto.family_name,
        }
    }
}