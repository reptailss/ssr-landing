import {ModelSqlColumns} from 'os-core-ts'
import {PageContentDto} from '@common/dto/pageContentDto'

export const PAGE_CONTENTS_COLUMNS: ModelSqlColumns<PageContentDto> = {
    key: {
        type: 'STRING',
    },
    value: {
        type: 'JSON',
    },
    page: {
        type: 'STRING',
    },
    locale: {
        type: 'STRING',
    },
}
