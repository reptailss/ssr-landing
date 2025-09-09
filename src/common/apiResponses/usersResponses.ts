import { UserDto } from '@common/dto/userDto'

export type UsersListResponse = {
    page: number
    all_pages: number
    all_rows: number
    per_page: number
    rows: UserDto[]
}