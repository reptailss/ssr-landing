import { CreateNewsDto, UpdateNewsDto } from '@common/dto/newsDto'
import { CreateEntity, UpdateEntity } from 'os-core-ts'
import { NewsEntity } from '@modules/news/repository/entity'

export class NewsEntityMapper {
    
    public static createDtoToEntity({
                                        createDto,
                                        slug,
                                        dateAdd,
                                    }: {
        createDto: CreateNewsDto
        slug: string
        dateAdd?: Date
    }): CreateEntity<NewsEntity> {
        return {
            title: createDto.title,
            image: createDto.image,
            locale: createDto.locale,
            content: createDto.content,
            slug,
            ...(dateAdd ? {
                date_add: new Date(dateAdd),
                date_update: new Date(dateAdd),
            } : {}),
        }
    }
    
    public static updateDtoToEntity(
        updateDto: UpdateNewsDto,
        slug: string,
    ): UpdateEntity<NewsEntity> {
        const newEntity: UpdateEntity<NewsEntity> = {
            slug,
        }
        if (typeof updateDto.title !== 'undefined') {
            newEntity.title = updateDto.title
        }
        if (typeof updateDto.content !== 'undefined') {
            newEntity.content = updateDto.content
        }
        if (typeof updateDto.locale !== 'undefined') {
            newEntity.locale = updateDto.locale
        }
        if (typeof updateDto.image !== 'undefined') {
            newEntity.image = updateDto.image
        }
        
        return newEntity
    }
    
}