import { ReactSsrAppPlugin } from 'os-react-ssr-server'
import { App, LocalesAppPlugin } from 'os-core-ts'
import { pageContentsAppModule } from '@modules/pageContents/pageContentsAppModule'
import { dbConnectionStaticSql } from '@db/dbConnection'
import { adminClientAppModule } from '@modules/adminClient/adminClientAppModule'
import { APP_LOCALES, DEFAULT_APP_LOCALE } from '@common/locales'
import { sharedContentsAppModule } from '@modules/sharedContents/sharedContentsAppModule'
import { mediaLibraryAppModule } from '@modules/mediaLibrary/mediaLibraryAppModule'
import { newsAppModule } from '@modules/news/newsAppModule'
import { userAccessAppModule } from '@modules/userAccess/userAccessAppModule'
import { usersAppModule } from '@modules/users/usersAppModule'
import { contactUsAppModule } from '@modules/contactUs/contactUsAppModule'
import { ClientNotFoundPageController } from '@modules/client/controllers/ClientNotFoundPageController'
import { ClientGlobalDataController } from '@modules/client/controllers/ClientGlobalDataController'
import { clientAppModule } from '@modules/client/clientAppModule'


export class AppService {
    
    private readonly app = new App()
    
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
                DEFAULT_APP_LOCALE,
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
            .useModule(mediaLibraryAppModule)
            .useModule(usersAppModule)
            .useModule(userAccessAppModule)
            .useModule(contactUsAppModule)
            .useModule(adminClientAppModule)
            .initModules()
        
        await dbConnectionStaticSql.syncModels()
        
        
        this.app.listen()
        
    }
    
}
