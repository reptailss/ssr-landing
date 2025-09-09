import { AppModule } from 'os-core-ts'
import { SavePageContentController } from '@modules/pageContents/controllers/SavePageContentController'
import { DeletePageContentController } from '@modules/pageContents/controllers/DeletePageContentController'
import { GetPageContentController } from '@modules/pageContents/controllers/GetPageContentController'
import { SaveDefaultPageContentController } from '@modules/pageContents/controllers/SaveDefaultPageContentController'

export const pageContentsAppModule = new AppModule({
    controllers: [
        SavePageContentController,
        DeletePageContentController,
        GetPageContentController,
        SaveDefaultPageContentController,
    ],
    swaggerInfo: {
        tag: 'Page-contents',
    },
})
