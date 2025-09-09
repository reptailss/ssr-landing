import { MediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'

export type MediaFilesListResponse = {
    page: number
    all_pages: number
    all_rows: number
    per_page: number
    rows: MediaFileDto[]
}