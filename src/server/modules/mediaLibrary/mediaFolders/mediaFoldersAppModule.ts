import { AppModule } from 'os-core-ts'
import { CreateMediaFolderController } from '@modules/mediaLibrary/mediaFolders/controllers/CreateMediaFolderController'
import { UpdateMediaFolderController } from '@modules/mediaLibrary/mediaFolders/controllers/UpdateMediaFolderController'
import { DeleteMediaFolderController } from '@modules/mediaLibrary/mediaFolders/controllers/DeleteMediaFolderController'
import { GetAllMediaFolderController } from '@modules/mediaLibrary/mediaFolders/controllers/GetAllMediaFolderController'

export const mediaFoldersAppModule = new AppModule({
	controllers: [
		CreateMediaFolderController,
		UpdateMediaFolderController,
		DeleteMediaFolderController,
		GetAllMediaFolderController
	],
	swaggerInfo: {
		tag: 'Media-folders'
	}
})
