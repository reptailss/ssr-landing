import { ISsrGlobalDataController, ReactSsr } from 'os-react-ssr-server'
import { Controller, AppLocale } from 'os-core-ts'
import { AppLocaleValue } from '@common/locales'
import { ClientGlobalDataService } from '@modules/client/services/ClientGlobalDataService'
import { ClientGlobalData } from '@common/globalData'

@Controller()
export class ClientGlobalDataController implements ISsrGlobalDataController {
    
    constructor(
        private readonly clientGlobalDataService: ClientGlobalDataService,
    ) {
    }
    
    @ReactSsr('')
    public async loadGlobalData(
        @AppLocale() locale: AppLocaleValue | null,
    ): Promise<ClientGlobalData> {
        return await this.clientGlobalDataService.getGlobalData(
            locale,
        )
    }
}