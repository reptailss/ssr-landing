

export type AppUserDto = CreateAppUserDto & {
    open_user_id: number
    id: number
    date_add: Date
    date_update: Date
}


export type UpdateAppUserDto = Partial<CreateAppUserDto>

export type CreateAppUserDto = {
    family_name: string
    given_name: string
    email: string
}
