import { CreateUserAccessEntity, UpdateUserAccessEntity } from '@modules/userAccess/model/entity'
import { CreateUserAccessDto, UpdateUserAccessDto } from '@common/dto/userAccessDto'

export class UserAccessMapper {
    
    public createUserAccessDtoToEntity({
                                           createDto,
                                           authorOpenUserId,
                                       }: {
        createDto: CreateUserAccessDto
        authorOpenUserId: number
    }): CreateUserAccessEntity {
        return {
            open_user_id: createDto.open_user_id,
            roles: createDto.roles,
            author_open_user_id: authorOpenUserId,
        }
    }
    
    
    public updateUserAccessDtoToEntity({
                                           updateDto,
                                           authorOpenUserId,
                                       }: {
        updateDto: UpdateUserAccessDto
        authorOpenUserId: number
    }):UpdateUserAccessEntity {
        const newUpdateUserAccessDto:UpdateUserAccessEntity = {
            author_open_user_id:authorOpenUserId
        }
        if(typeof updateDto.open_user_id !== 'undefined'){
            newUpdateUserAccessDto.open_user_id = updateDto.open_user_id
        }
        
        if(typeof updateDto.roles !== 'undefined'){
            newUpdateUserAccessDto.roles = updateDto.roles
        }
        
        return  newUpdateUserAccessDto
    }
}