import {ModelSqlColumns} from 'os-core-ts'
import {UserAccessDto} from '@common/dto/userAccessDto'

export const USER_ACCESS_COLUMNS: ModelSqlColumns<UserAccessDto> = {
    open_user_id: {
        type: 'INTEGER',
    },
    author_open_user_id: {
        type: 'INTEGER',
    },
    roles: {
        type: 'JSON',
    },
}
