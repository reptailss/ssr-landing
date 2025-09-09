import { AppModule } from 'os-core-ts'
import { CreateMediaFileController } from '@modules/mediaLibrary/mediaFiles/controllers/CreateMediaFileController'
import { DeleteMediaFileController } from '@modules/mediaLibrary/mediaFiles/controllers/DeleteMediaFileController'
import { GetAllMediaFileController } from '@modules/mediaLibrary/mediaFiles/controllers/GetAllMediaFileController'

export const mediaFilesAppModule = new AppModule({
    controllers: [
        CreateMediaFileController,
        DeleteMediaFileController,
        GetAllMediaFileController,
    ],
    swaggerInfo: {
        tag: 'Media-files',
    },
})
