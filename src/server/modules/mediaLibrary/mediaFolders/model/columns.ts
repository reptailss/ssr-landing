import {ModelSqlColumns} from 'os-core-ts'
import { MediaFolderDto } from '@common/dto/mediaFolderDto'

export const MEDIA_FOLDERS_COLUMNS: ModelSqlColumns<MediaFolderDto> = {
    name: {
        type: 'STRING',
        options: {
            length: 255,
        },
        allowNull: false,
    },
    open_user_id: {
        type: 'INTEGER',
        defaultValue: 0,
        allowNull: false,
    },
    parent_id: {
        type: 'INTEGER',
        defaultValue: 0,
        allowNull: false,
    },
}
