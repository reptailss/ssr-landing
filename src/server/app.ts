import { ReactSsrAppPlugin } from 'os-react-ssr-server'
import { App, DiContainer, LocalesAppPlugin } from 'os-core-ts'
import { pageContentsAppModule } from '@modules/pageContents/pageContentsAppModule'
import { dbConnectionStaticSql } from '@db/dbConnection'
import { adminClientAppModule } from '@modules/adminClient/adminClientAppModule'
import { APP_LOCALES, DEFAULT_APP_LOCALE_VALUE } from '@common/locales'
import { sharedContentsAppModule } from '@modules/sharedContents/sharedContentsAppModule'
import { newsAppModule } from '@modules/news/newsAppModule'
import { userAccessAppModule } from '@modules/userAccess/userAccessAppModule'
import { usersAppModule } from '@modules/users/usersAppModule'
import { contactUsAppModule } from '@modules/contactUs/contactUsAppModule'
import { ClientNotFoundPageController } from '@modules/client/controllers/ClientNotFoundPageController'
import { ClientGlobalDataController } from '@modules/client/controllers/ClientGlobalDataController'
import { clientAppModule } from '@modules/client/clientAppModule'
import { mediaFilesAppModule } from '@modules/mediaLibrary/mediaFiles/mediaFilesAppModule'
import { mediaFoldersAppModule } from '@modules/mediaLibrary/mediaFolders/mediaFoldersAppModule'
import { InitUserAccessService } from '@modules/userAccess/services/InitUserAccessService'
import { SavePageDefaultContentService } from '@modules/pageContents/services/SavePageDefaultContentService'


export class AppService {
    
    private readonly app = new App()
    private readonly initUserAccessService = DiContainer.resolve(InitUserAccessService)
    private readonly savePageDefaultContentService = DiContainer.resolve(SavePageDefaultContentService)
    
    public async init(): Promise<void> {
        
        this.app
            .useCors()
            .useConsoleLogger()
            .useRequestLogger()
            .useHealth()
            .useSwagger()
            .useDashboard()
            .usePlugin(new LocalesAppPlugin(
                APP_LOCALES,
                DEFAULT_APP_LOCALE_VALUE,
            ))
            .usePlugin(
                new ReactSsrAppPlugin()
                    .useNotFoundController(ClientNotFoundPageController)
                    .useGlobalDataController(ClientGlobalDataController),
            )
            .useStatic('public')
            .useModule(clientAppModule)
            .useModule(pageContentsAppModule)
            .useModule(sharedContentsAppModule)
            .useModule(newsAppModule)
            .useModule(mediaFilesAppModule)
            .useModule(mediaFoldersAppModule)
            .useModule(usersAppModule)
            .useModule(userAccessAppModule)
            .useModule(contactUsAppModule)
            .useModule(adminClientAppModule)
            .initModules()
        
        await dbConnectionStaticSql.syncRepositories()
        
        await this.initUserAccessService.addSuperAdminAccessToUsers([1])
        await this.savePageDefaultContentService.saveAllDefaultPagesContentIfNotExists()
        
        this.app.listen()
        
    }
    
}
