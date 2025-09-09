import {
    AuthDec,
    BodyDec,
    BuildResponseFormat,
    ControllerDec,
    MutateRowResult,
    PostDec,
    SwaggerInfoDec,
    UserInfo,
} from 'os-core-ts'
import { NewsValidator } from '@modules/news/validator/NewsValidator'
import { CreateNewsService } from '@modules/news/services/CreateNewsService'
import { NEWS_ROUTE_PATHS } from '@common/apiRoutePaths/newsRoutePaths'
import { CreateMultilanguageNewsDto } from '@common/dto/newsDto'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

const newsValidator = new NewsValidator()

const createMultilanguageNewsDtoSchema = newsValidator.getCreateMultilanguageNewsDtoSchema()

@ControllerDec()
export class CreateNewsController {
    constructor(
        private readonly createNewsService: CreateNewsService = new CreateNewsService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Add multilanguage news' })
    @PostDec(NEWS_ROUTE_PATHS.addMultilanguage)
    public async createMultilanguageNews(
        @BodyDec<CreateMultilanguageNewsDto>(createMultilanguageNewsDtoSchema) body: CreateMultilanguageNewsDto,
        @AuthDec userInfo: UserInfo,
    ): Promise<MutateRowResult<string>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const ids = await this.createNewsService.createMultilanguageNews({
            initiatorOpenUserId: userInfo.open_user_id,
            createMultilanguageDto: body,
        })
        return BuildResponseFormat.mutateRow(ids.join(','))
    }
}
