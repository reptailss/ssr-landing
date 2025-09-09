import { UserAccessDto } from '@common/dto/userAccessDto'

export type UserAccessResponse = {
    row: UserAccessDto
    error: false
    errors: []
}