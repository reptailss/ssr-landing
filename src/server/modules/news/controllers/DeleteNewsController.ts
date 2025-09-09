import {
    AuthDec,
    BuildResponseFormat,
    ControllerDec,
    DeleteDec,
    MutateRowResult,
    ParamDec,
    SwaggerInfoDec,
    UserInfo,
} from 'os-core-ts'
import { DeleteNewsService } from '@modules/news/services/DeleteNewsService'
import { NEWS_ROUTE_PATHS } from '@common/apiRoutePaths/newsRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@ControllerDec()
export class DeleteNewsController {
    constructor(
        private readonly deleteNewsService: DeleteNewsService = new DeleteNewsService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Delete multilanguage news' })
    @DeleteDec(NEWS_ROUTE_PATHS.deleteMultilanguage)
    public async deleteMultilanguageNews(
        @AuthDec userInfo: UserInfo,
        @ParamDec('slug') slug: string,
    ): Promise<MutateRowResult<string>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const ids = await this.deleteNewsService.deleteMultilanguageNews({
            initiatorOpenUserId: userInfo.open_user_id,
            slug,
        })
        return BuildResponseFormat.mutateRow(ids.join(','))
    }
}
