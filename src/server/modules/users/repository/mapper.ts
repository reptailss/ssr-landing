import { CreateEntity } from 'os-core-ts'
import { CreateAppUserDto } from '@common/dto/userDto'
import { UserEntity } from '@modules/users/repository/entity'

export class UserEntityMapper {
    
    public static createDtoToEntity(
        createDto: CreateAppUserDto,
        openUserId: number,
    ): CreateEntity<UserEntity> {
        return {
            given_name: createDto.given_name,
            email: createDto.email,
            open_user_id: openUserId,
            family_name: createDto.family_name,
        }
    }
}