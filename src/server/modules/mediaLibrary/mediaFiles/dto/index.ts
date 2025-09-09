

export type MediaFileDto = CreateMediaFileDto & {
    open_user_id: number
    file: string
    id: number
    date_add: Date
    date_update: Date
    mimetype:string | null
}


export type UpdateMediaFileDto = Partial<CreateMediaFileDto>

export type CreateMediaFileDto = {
    name: string
    folder_id: number
}
