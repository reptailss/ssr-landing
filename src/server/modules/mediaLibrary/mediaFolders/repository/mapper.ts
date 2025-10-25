import { CreateMediaFolderDto } from '@common/dto/mediaFolderDto'
import { CreateEntity } from 'os-core-ts'
import { MediaFolderEntity } from '@modules/mediaLibrary/mediaFolders/repository/entity'

export class MediaFolderEntityMapper {
    
    public static createDtoToEntity(
        createDto: CreateMediaFolderDto,
        openUserId: number,
    ): CreateEntity<MediaFolderEntity> {
        return {
            name: createDto.name,
            open_user_id: openUserId,
            parent_id: createDto.parent_id,
        }
    }
}