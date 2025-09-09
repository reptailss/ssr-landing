import { MultilanguageNewsDto, NewsDto } from '@common/dto/newsDto'

export type NewsListResponse = {
    page: number
    all_pages: number
    all_rows: number
    per_page: number
    rows: NewsDto[]
}

export type MultilanguageNewsResponse = {
    row:MultilanguageNewsDto
    error: false
    errors: []
}