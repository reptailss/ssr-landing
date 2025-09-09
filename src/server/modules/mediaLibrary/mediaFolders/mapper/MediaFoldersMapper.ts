import { CreateMediaFolderEntity } from '@modules/mediaLibrary/mediaFolders/model/entity'
import { CreateMediaFolderDto } from '@common/dto/mediaFolderDto'

export class MediaFoldersMapper {
	
	public createMediaFolderDtoToEntity({
											createDto,
											openUserId
										}: {
		createDto: CreateMediaFolderDto
		openUserId: number
	}): CreateMediaFolderEntity {
		return {
			name: createDto.name,
			open_user_id: openUserId,
			parent_id: createDto.parent_id
		}
	}
}