import { MediaFolderDto } from '@common/dto/mediaFolderDto'

export type MediaFoldersListResponse = {
    page: number
    all_pages: number
    all_rows: number
    per_page: number
    rows: MediaFolderDto[]
}