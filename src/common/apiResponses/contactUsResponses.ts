import { ContactUsDto } from '@common/dto/contactUsDto'

export type ContactUsListResponse = {
    page: number
    all_pages: number
    all_rows: number
    per_page: number
    rows: ContactUsDto[]
}
