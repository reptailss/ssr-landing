import { ISsrNotFoundController, ReactSsr } from 'os-react-ssr-server'
import { AppLocale, Controller, StatusSetter } from 'os-core-ts'
import { AppLocaleValue } from '@common/locales'
import { BuildClientResponseFormat } from '@modules/client/clientResponseFormat/BuildClientResponseFormat'
import { NotFoundClientPageData } from '@common/clientPageData/notFoundPageData'

@Controller()
export class ClientNotFoundPageController implements ISsrNotFoundController {
    
    @ReactSsr('')
    public async notFoundPage(
        @AppLocale() locale: AppLocaleValue | null,
        @StatusSetter() statusSetter: (status: number) => void,
    ): Promise<NotFoundClientPageData> {
        statusSetter(404)
        return BuildClientResponseFormat.pageData({})
    }
}