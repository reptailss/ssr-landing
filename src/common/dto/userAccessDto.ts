

export type UserAccessDto = CreateUserAccessDto & {
    id: number
    date_add: Date
    date_update: Date
    author_open_user_id: number
}


export type UpdateUserAccessDto = Partial<CreateUserAccessDto>

export type CreateUserAccessDto = {
    open_user_id: number
    roles: string[]
}
