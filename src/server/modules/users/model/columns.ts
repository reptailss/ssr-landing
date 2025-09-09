import {ModelSqlColumns} from 'os-core-ts'
import {UserDto} from '@common/dto/userDto'

export const USERS_COLUMNS: ModelSqlColumns<UserDto> = {
    open_user_id: {
        type: 'INTEGER',
    },
    family_name: {
        type: 'STRING',
    },
    given_name: {
        type: 'STRING',
    },
    email: {
        type: 'STRING',
    }
}
