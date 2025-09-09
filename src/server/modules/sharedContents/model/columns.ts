import { ModelSqlColumns } from 'os-core-ts'
import { SharedContentDto } from '@common/dto/sharedContentDto'

export const SHARED_CONTENTS_COLUMNS: ModelSqlColumns<SharedContentDto> = {
    key: {
        type: 'STRING',
    },
    value: {
        type: 'JSON',
    },
    locale: {
        type: 'STRING',
    },
}
