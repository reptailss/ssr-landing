import { NewsDto } from '@common/dto/newsDto'
import { ModelSqlColumns } from 'os-core-ts'

export const NEWS_COLUMNS: ModelSqlColumns<NewsDto> = {
    title: {
        type: 'STRING',
    },
    content: {
        type: 'TEXT',
        options: {
            length: 'long',
        },
    },
    locale: {
        type: 'STRING',
    },
    image: {
        type: 'STRING',
    },
    slug: {
        type: 'STRING',
    },
}
