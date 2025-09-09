import { CreateNewsEntity, UpdateNewsEntity } from '@modules/news/model/entity'
import { CreateNewsDto, UpdateNewsDto } from '@common/dto/newsDto'

export class NewsMapper {
    
    public createNewsDtoToEntity({
                                     createDto,
                                     slug,
                                     dateAdd,
                                 }: {
        createDto: CreateNewsDto
        slug: string
        dateAdd?:Date
    }): CreateNewsEntity {
        return {
            title: createDto.title,
            image: createDto.image,
            locale: createDto.locale,
            content: createDto.content,
            slug,
            ...(dateAdd ? {
                date_add:new Date(dateAdd),
                date_update:new Date(dateAdd)
            } :{}),
        }
    }
    
    public updateNewsDtoToEntity({
                                     slug,
                                     updateDto,
                                 }: {
        updateDto: UpdateNewsDto
        slug: string
    }): UpdateNewsEntity {
        const newEntity: UpdateNewsEntity = {
            slug,
        }
        if(typeof updateDto.title !== 'undefined') {
            newEntity.title = updateDto.title
        }
        if(typeof updateDto.content !== 'undefined') {
            newEntity.content = updateDto.content
        }
        if(typeof updateDto.locale !== 'undefined') {
            newEntity.locale = updateDto.locale
        }
        if(typeof updateDto.image !== 'undefined') {
            newEntity.image = updateDto.image
        }
        
        return newEntity
    }
    
}