import { AppModule } from 'os-core-ts'
import { SaveSharedContentController } from '@modules/sharedContents/controllers/SaveSharedContentController'
import { DeleteSharedContentController } from '@modules/sharedContents/controllers/DeleteSharedContentController'
import { GetSharedContentController } from '@modules/sharedContents/controllers/GetSharedContentController'

export const sharedContentsAppModule = new AppModule({
    controllers: [
        SaveSharedContentController,
        DeleteSharedContentController,
        GetSharedContentController,
    ],
    swaggerInfo: {
        tag: 'Shared-contents',
    },
})
