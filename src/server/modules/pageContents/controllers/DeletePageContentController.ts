import {
    AuthDec,
    BuildResponseFormat,
    ControllerDec,
    DeleteDec,
    MutateRowResult,
    QueryParamDec,
    QueryParamOptionalDec,
    SwaggerInfoDec,
    UserInfo,
} from 'os-core-ts'
import { DeletePageContentService } from '@modules/pageContents/services/DeletePageContentService'
import { PAGE_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/pageContentsRoutePaths'
import { AppLocale } from '@common/locales'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@ControllerDec()
export class DeletePageContentController {
    constructor(
        private readonly deletePageContentService: DeletePageContentService = new DeletePageContentService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Delete page-content by page and key' })
    @DeleteDec(PAGE_CONTENTS_ROUTE_PATHS.deleteByPageAndKey)
    public async deletePageContentByPageAndKey(
        @AuthDec userInfo: UserInfo,
        @QueryParamDec('page') page: string,
        @QueryParamDec('key') key: string,
        @QueryParamOptionalDec('locale') locale: AppLocale | undefined,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        
        const oldDto = await this.deletePageContentService.deletePageContentByPageAndKey({
            initiatorOpenUserId: userInfo.open_user_id,
            page,
            key,
            locale,
        })
        return BuildResponseFormat.mutateRow(oldDto.id)
    }
}
