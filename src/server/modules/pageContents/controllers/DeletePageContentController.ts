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
import { DeletePageContentService } from '@modules/pageContents/services/DeletePageContentService'
import { PAGE_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/pageContentsRoutePaths'
import { AppLocaleValue } from '@common/locales'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@Controller()
export class DeletePageContentController {
    constructor(
        private readonly deletePageContentService: DeletePageContentService ,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Delete page-content by page and key' })
    @Delete(PAGE_CONTENTS_ROUTE_PATHS.deleteByPageAndKey)
    public async deletePageContentByPageAndKey(
        @User() userDto: UserDto,
        @QueryParam('page') page: string,
        @QueryParam('key') key: string,
        @QueryParamOptional('locale') locale: AppLocaleValue | undefined,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        
        const oldDto = await this.deletePageContentService.deletePageContentByPageAndKey({
            initiatorOpenUserId: userDto.open_user_id,
            page,
            key,
            locale,
        })
        return BuildResponseFormat.mutateRow(oldDto.id)
    }
}
