import { CreateMediaFileDto, UpdateMediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { CreateMediaFileEntity, UpdateMediaFileEntity } from '@modules/mediaLibrary/mediaFiles/model/entity'

export class MediaFilesMapper {
    
    public createMediaFileDtoToEntity({
                                          createDto,
                                          openUserId,
                                          file,
                                          mimetype,
                                      }: {
        createDto: CreateMediaFileDto
        openUserId: number
        file: string
        mimetype: string | null
    }): CreateMediaFileEntity {
        return {
            name: createDto.name,
            file,
            folder_id: createDto.folder_id,
            open_user_id: openUserId,
            mimetype,
        }
    }
    
    public updateMediaFileDtoToEntity({
                                          updateDto,
                                          file,
                                          mimetype,
                                      }: {
        updateDto: UpdateMediaFileDto
        file?: string
        mimetype?: string | null
    }): UpdateMediaFileEntity {
        
        const updateEntity: UpdateMediaFileEntity = {}
        
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