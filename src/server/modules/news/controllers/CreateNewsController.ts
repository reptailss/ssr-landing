import {
    User,
    Body,
    BuildResponseFormat,
    Controller,
    MutateRowResult,
    Post,
    SwaggerInfo,
    UserDto,
} from 'os-core-ts'
import { NewsValidator } from '@modules/news/validator/NewsValidator'
import { CreateNewsService } from '@modules/news/services/CreateNewsService'
import { NEWS_ROUTE_PATHS } from '@common/apiRoutePaths/newsRoutePaths'
import { CreateMultilanguageNewsDto } from '@common/dto/newsDto'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

const newsValidator = new NewsValidator()

const createMultilanguageNewsDtoSchema = newsValidator.getCreateMultilanguageNewsDtoSchema()

@Controller()
export class CreateNewsController {
    constructor(
        private readonly createNewsService: CreateNewsService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Add multilanguage news' })
    @Post(NEWS_ROUTE_PATHS.addMultilanguage)
    public async createMultilanguageNews(
        @Body<CreateMultilanguageNewsDto>(createMultilanguageNewsDtoSchema) body: CreateMultilanguageNewsDto,
        @User() userDto: UserDto,
    ): Promise<MutateRowResult<string>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const ids = await this.createNewsService.createMultilanguageNews({
            initiatorOpenUserId: userDto.open_user_id,
            createMultilanguageDto: body,
        })
        return BuildResponseFormat.mutateRow(ids.join(','))
    }
}
