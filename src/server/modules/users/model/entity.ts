import { CreateUserDto } from '@common/dto/userDto'

export type CreateUserEntity =  CreateUserDto & {
    open_user_id: number
}
