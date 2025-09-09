import { CreateNewsDto, UpdateNewsDto } from '@common/dto/newsDto'

export type CreateNewsEntity = CreateNewsDto & {
    slug:string
}

export type UpdateNewsEntity = UpdateNewsDto & {
    slug?:string
}