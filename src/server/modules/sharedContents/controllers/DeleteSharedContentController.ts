import {
    BuildResponseFormat,
    Controller,
    Delete,
    MutateRowResult,
    QueryParam,
    QueryParamOptional,
    SwaggerInfo,
    User,
    UserDto,
} from 'os-core-ts'
import { DeleteSharedContentService } from '@modules/sharedContents/services/DeleteSharedContentService'
import { SHARED_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/sharedContentRoutePaths'
import { AppLocaleValue } from '@common/locales'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@Controller()
export class DeleteSharedContentController {
    constructor(
        private readonly deleteSharedContentService: DeleteSharedContentService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Delete shared-content by key' })
    @Delete(SHARED_CONTENTS_ROUTE_PATHS.deleteByKey)
    public async deleteSharedContentByKey(
        @User() userDto: UserDto,
        @QueryParam('key') key: string,
        @QueryParamOptional('locale') locale: AppLocaleValue,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const oldDto = await this.deleteSharedContentService.deleteSharedContentByKey({
            initiatorOpenUserId: userDto.open_user_id,
            key,
            locale,
        })
        return BuildResponseFormat.mutateRow(oldDto.id)
    }
}
