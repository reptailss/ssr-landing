import { ISsrNotFoundController, ReactSsrDec } from 'os-react-ssr-server'
import { ControllerDec, LocaleDec, SetResponseStatus, SetResponseStatusDec } from 'os-core-ts'
import { AppLocale } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { NotFoundClientPageData } from '@common/clientPageData/notFoundPageData'

@ControllerDec()
export class ClientNotFoundPageController implements ISsrNotFoundController {
    
    @ReactSsrDec('')
    public async notFoundPage(
        @LocaleDec locale: AppLocale | null,
        @SetResponseStatusDec setResponseStatus: SetResponseStatus,
    ): Promise<NotFoundClientPageData> {
        setResponseStatus(404)
        return BuildClientResponseFormat.pageData({})
    }
}