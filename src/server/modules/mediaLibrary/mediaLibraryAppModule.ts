import { AppModule } from 'os-core-ts'
import { mediaFilesAppModule } from '@modules/mediaLibrary/mediaFiles/mediaFilesAppModule'
import { mediaFoldersAppModule } from '@modules/mediaLibrary/mediaFolders/mediaFoldersAppModule'

export const mediaLibraryAppModule = new AppModule({
    appModules: [
        mediaFilesAppModule,
        mediaFoldersAppModule,
    ],
})