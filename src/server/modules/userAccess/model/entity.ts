import { CreateUserAccessDto, UpdateUserAccessDto } from '@common/dto/userAccessDto'

export type CreateUserAccessEntity = CreateUserAccessDto &  {
    author_open_user_id: number
}

export type UpdateUserAccessEntity = UpdateUserAccessDto & {
    author_open_user_id?: number
}