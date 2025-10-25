import { CreateUserAccessDto, UpdateUserAccessDto } from '@common/dto/userAccessDto'
import { CreateEntity, UpdateEntity } from 'os-core-ts'
import { UserAccessEntity } from '@modules/userAccess/repository/entity'

export class UserAccessEntityMapper {
    
    public static createDtoToEntity(
        createDto: CreateUserAccessDto,
        authorOpenUserId: number,
    ): CreateEntity<UserAccessEntity> {
        return {
            open_user_id: createDto.open_user_id,
            roles: createDto.roles,
            author_open_user_id: authorOpenUserId,
        }
    }
    
    
    public static updateDtoToEntity(
        updateDto: UpdateUserAccessDto,
        authorOpenUserId: number,
    ): UpdateEntity<UserAccessEntity> {
        const newUpdateUserAccessDto: UpdateEntity<UserAccessEntity> = {
            author_open_user_id: authorOpenUserId,
        }
        if (typeof updateDto.open_user_id !== 'undefined') {
            newUpdateUserAccessDto.open_user_id = updateDto.open_user_id
        }
        
        if (typeof updateDto.roles !== 'undefined') {
            newUpdateUserAccessDto.roles = updateDto.roles
        }
        
        return newUpdateUserAccessDto
    }
}