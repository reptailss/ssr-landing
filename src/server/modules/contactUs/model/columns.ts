import {ModelSqlColumns} from 'os-core-ts'
import {ContactUsDto} from '@common/dto/contactUsDto'

export const CONTACT_US_COLUMNS: ModelSqlColumns<ContactUsDto> = {
    email: {
        type: 'STRING',
    },
    text: {
        type: 'STRING',
    },
    form_name: {
        type: 'STRING',
    },
    status: {
        type: 'STRING',
    },
}
