import { CreateMediaFileDto, UpdateMediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'

export type CreateMediaFileEntity = CreateMediaFileDto & {
	open_user_id: number
	file: string
	mimetype:string | null
}

export type UpdateMediaFileEntity = UpdateMediaFileDto & {
	file?: string
	mimetype?:string | null
}