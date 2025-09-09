import { ISsrGlobalDataController, ReactSsrDec } from 'os-react-ssr-server'
import { ControllerDec, LocaleDec } from 'os-core-ts'
import { AppLocale } from '@common/locales'
import { ClientGlobalDataService } from '@modules/client/services/ClientGlobalDataService'
import { ClientGlobalData } from '@common/globalData'

@ControllerDec()
export class ClientGlobalDataController implements ISsrGlobalDataController {
    
    constructor(
        private readonly clientGlobalDataService: ClientGlobalDataService = new ClientGlobalDataService(),
    ) {
    }
    
    @ReactSsrDec('')
    public async loadGlobalData(
        @LocaleDec locale: AppLocale | null,
    ): Promise<ClientGlobalData> {
        return await this.clientGlobalDataService.getGlobalData(
            locale,
        )
    }
}