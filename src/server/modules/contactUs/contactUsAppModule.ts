import {AppModule} from 'os-core-ts'
import {CreateContactUsController} from '@modules/contactUs/controllers/CreateContactUsController'
import {UpdateContactUsController} from '@modules/contactUs/controllers/UpdateContactUsController'
import {DeleteContactUsController} from '@modules/contactUs/controllers/DeleteContactUsController'
import {GetAllContactUsController} from '@modules/contactUs/controllers/GetAllContactUsController'

export const contactUsAppModule = new AppModule({
    controllers: [
        CreateContactUsController,
        UpdateContactUsController,
        DeleteContactUsController,
        GetAllContactUsController,
    ],
    swaggerInfo: {
        tag: 'Contact-us',
    },
})
