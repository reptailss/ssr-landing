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
import { DeleteSharedContentService } from '@modules/sharedContents/services/DeleteSharedContentService'
import { SHARED_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/sharedContentRoutePaths'
import { AppLocale } from '@common/locales'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@ControllerDec()
export class DeleteSharedContentController {
    constructor(
        private readonly deleteSharedContentService: DeleteSharedContentService = new DeleteSharedContentService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Delete shared-content by key' })
    @DeleteDec(SHARED_CONTENTS_ROUTE_PATHS.deleteByKey)
    public async deleteSharedContentByKey(
        @AuthDec userInfo: UserInfo,
        @QueryParamDec('key') key: string,
        @QueryParamOptionalDec('locale') locale: AppLocale,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const oldDto = await this.deleteSharedContentService.deleteSharedContentByKey({
            initiatorOpenUserId: userInfo.open_user_id,
            key,
            locale,
        })
        return BuildResponseFormat.mutateRow(oldDto.id)
    }
}
