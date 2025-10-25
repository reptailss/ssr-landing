import { CreateMediaFileDto, UpdateMediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { CreateEntity, UpdateEntity } from 'os-core-ts'
import { MediaFileEntity } from '@modules/mediaLibrary/mediaFiles/repository/entity'

export class MediaFilesEntityMapper {
    
    public static dtoToEntity({
                                  createDto,
                                  openUserId,
                                  file,
                                  mimetype,
                              }: {
        createDto: CreateMediaFileDto
        openUserId: number
        file: string
        mimetype: string | null
    }): CreateEntity<MediaFileEntity> {
        return {
            name: createDto.name,
            file,
            folder_id: createDto.folder_id,
            open_user_id: openUserId,
            mimetype,
        }
    }
    
    public static updateDtoToEntity({
                                        updateDto,
                                        file,
                                        mimetype,
                                    }: {
        updateDto: UpdateMediaFileDto
        file?: string
        mimetype?: string | null
    }): UpdateEntity<MediaFileEntity> {
        
        const updateEntity: UpdateEntity<MediaFileEntity> = {}
        
        if (typeof file !== 'undefined') {
            updateEntity.file = file
        }
        if (typeof updateDto.name !== 'undefined') {
            updateEntity.name = updateDto.name
        }
        if (typeof updateDto.folder_id !== 'undefined') {
            updateEntity.name = updateDto.name
        }
        
        if (typeof mimetype !== 'undefined') {
            updateEntity.mimetype = mimetype
        }
        
        return updateEntity
    }
}