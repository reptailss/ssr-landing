

export type MediaFolderDto = CreateMediaFolderDto & {
    open_user_id: number
    id: number
    date_add: Date
    date_update: Date
}


export type UpdateMediaFolderDto = Partial<CreateMediaFolderDto>

export type CreateMediaFolderDto = {
    name: string
    parent_id: number
}
