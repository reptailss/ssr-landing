import {
    AuthDec,
    BodyDec,
    BuildResponseFormat,
    ControllerDec,
    MutateRowResult,
    ParamDec,
    PutDec,
    SwaggerInfoDec,
    UserInfo,
} from 'os-core-ts'
import { NewsValidator } from '@modules/news/validator/NewsValidator'
import { UpdateNewsService } from '@modules/news/services/UpdateNewsService'
import { NEWS_ROUTE_PATHS } from '@common/apiRoutePaths/newsRoutePaths'
import { CreateMultilanguageNewsDto } from '@common/dto/newsDto'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

const newsValidator = new NewsValidator()

const createMultilanguageNewsDtoSchema = newsValidator.getCreateMultilanguageNewsDtoSchema()

@ControllerDec()
export class UpdateNewsController {
    constructor(
        private readonly updateNewsService: UpdateNewsService = new UpdateNewsService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    
    @SwaggerInfoDec({ summary: 'Update multilanguage news' })
    @PutDec(NEWS_ROUTE_PATHS.updateMultilanguage)
    public async updateMultilanguageNews(
        @BodyDec<CreateMultilanguageNewsDto>(createMultilanguageNewsDtoSchema) body: CreateMultilanguageNewsDto,
        @AuthDec userInfo: UserInfo,
        @ParamDec('slug') slug: string,
    ): Promise<MutateRowResult<string>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const ids = await this.updateNewsService.updateMultilanguageNews({
            initiatorOpenUserId: userInfo.open_user_id,
            updateMultilanguageDto: body,
            slug,
        })
        
        return BuildResponseFormat.mutateRow(ids.join(','))
    }
}
