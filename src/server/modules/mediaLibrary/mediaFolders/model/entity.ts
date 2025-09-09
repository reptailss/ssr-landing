import { CreateMediaFolderDto } from '@common/dto/mediaFolderDto'

export type CreateMediaFolderEntity = CreateMediaFolderDto & {
	open_user_id: number
}