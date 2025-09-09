

export type UserDto = CreateUserDto & {
    open_user_id: number
    id: number
    date_add: Date
    date_update: Date
}


export type UpdateUserDto = Partial<CreateUserDto>

export type CreateUserDto = {
    family_name: string
    given_name: string
    email: string
}
