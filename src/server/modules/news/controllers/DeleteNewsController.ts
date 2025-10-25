import {
    BuildResponseFormat,
    Controller,
    Delete,
    MutateRowResult,
    Param,
    SwaggerInfo,
    User,
    UserDto,
} from 'os-core-ts'
import { DeleteNewsService } from '@modules/news/services/DeleteNewsService'
import { NEWS_ROUTE_PATHS } from '@common/apiRoutePaths/newsRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@Controller()
export class DeleteNewsController {
    constructor(
        private readonly deleteNewsService: DeleteNewsService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Delete multilanguage news' })
    @Delete(NEWS_ROUTE_PATHS.deleteMultilanguage)
    public async deleteMultilanguageNews(
        @User() userDto: UserDto,
        @Param('slug') slug: string,
    ): Promise<MutateRowResult<string>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const ids = await this.deleteNewsService.deleteMultilanguageNews({
            initiatorOpenUserId: userDto.open_user_id,
            slug,
        })
        return BuildResponseFormat.mutateRow(ids.join(','))
    }
}
