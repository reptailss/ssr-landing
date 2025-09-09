import {AppModule} from 'os-core-ts'
import {CreateNewsController} from '@modules/news/controllers/CreateNewsController'
import {UpdateNewsController} from '@modules/news/controllers/UpdateNewsController'
import {DeleteNewsController} from '@modules/news/controllers/DeleteNewsController'
import {GetNewsController} from '@modules/news/controllers/GetNewsController'
import {GetAllNewsController} from '@modules/news/controllers/GetAllNewsController'

export const newsAppModule = new AppModule({
    controllers: [
        CreateNewsController,
        UpdateNewsController,
        DeleteNewsController,
        GetNewsController,
        GetAllNewsController,
    ],
    swaggerInfo: {
        tag: 'News',
    },
})
