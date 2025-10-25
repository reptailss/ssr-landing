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
import { PageContentsValidator } from '@modules/pageContents/validator/PageContentsValidator'
import { CreatePageContentDto } from '@common/dto/pageContentDto'
import { PAGE_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/pageContentsRoutePaths'
import { SavePageContentService } from '@modules/pageContents/services/SavePageContentService'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

const pageContentsValidator = new PageContentsValidator()

const createPageContentDtoSchema = pageContentsValidator.getCreatePageContentDtoSchema()

@Controller()
export class SavePageContentController {
    constructor(
        private readonly savePageContentService: SavePageContentService ,
        private readonly checkUserAccessService: CheckUserAccessService ,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Save page-content by page and key' })
    @Post(PAGE_CONTENTS_ROUTE_PATHS.save)
    public async savePageContent(
        @Body(createPageContentDtoSchema) body: CreatePageContentDto,
        @User() userDto: UserDto,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const newDto = await this.savePageContentService.savePageContent({
            initiatorOpenUserId: userDto.open_user_id,
            createDto: body,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
    
    
}
