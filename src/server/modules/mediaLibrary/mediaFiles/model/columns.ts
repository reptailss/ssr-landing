import {ModelSqlColumns} from 'os-core-ts'
import {MediaFileDto} from '@modules/mediaLibrary/mediaFiles/dto'

export const MEDIA_FILES_COLUMNS: ModelSqlColumns<MediaFileDto> = {
    name: {
        type: 'STRING',
        options: {
            length: 255,
        },
        allowNull: false,
    },
    file: {
        type: 'STRING',
        options: {
            length: 255,
        },
        allowNull: false,
    },
    folder_id: {
        type: 'INTEGER',
        defaultValue: 0,
        allowNull: false,
    },
    open_user_id: {
        type: 'INTEGER',
        defaultValue: 0,
        allowNull: false,
    },
    mimetype: {
        type: 'STRING',
        options: {
            length: 255,
        },
        allowNull: false,
    },
}
