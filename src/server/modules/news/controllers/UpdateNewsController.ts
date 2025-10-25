import {
    Body,
    BuildResponseFormat,
    Controller,
    MutateRowResult,
    Param,
    Put,
    SwaggerInfo,
    User,
    UserDto,
} from 'os-core-ts'
import { NewsValidator } from '@modules/news/validator/NewsValidator'
import { UpdateNewsService } from '@modules/news/services/UpdateNewsService'
import { NEWS_ROUTE_PATHS } from '@common/apiRoutePaths/newsRoutePaths'
import { CreateMultilanguageNewsDto } from '@common/dto/newsDto'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

const newsValidator = new NewsValidator()

const createMultilanguageNewsDtoSchema = newsValidator.getCreateMultilanguageNewsDtoSchema()

@Controller()
export class UpdateNewsController {
    constructor(
        private readonly updateNewsService: UpdateNewsService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    
    @SwaggerInfo({ summary: 'Update multilanguage news' })
    @Put(NEWS_ROUTE_PATHS.updateMultilanguage)
    public async updateMultilanguageNews(
        @Body<CreateMultilanguageNewsDto>(createMultilanguageNewsDtoSchema) body: CreateMultilanguageNewsDto,
        @User() userDto: UserDto,
        @Param('slug') slug: string,
    ): Promise<MutateRowResult<string>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const ids = await this.updateNewsService.updateMultilanguageNews({
            initiatorOpenUserId: userDto.open_user_id,
            updateMultilanguageDto: body,
            slug,
        })
        
        return BuildResponseFormat.mutateRow(ids.join(','))
    }
}
