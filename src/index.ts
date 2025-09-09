import { AppService } from './server/app'
import { appLogger } from 'os-core-ts'

new AppService().init().then(() => {
    appLogger.info('App Service init.')
})



