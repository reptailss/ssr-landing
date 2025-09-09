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
import { PageContentsValidator } from '@modules/pageContents/validator/PageContentsValidator'
import { CreatePageContentDto } from '@common/dto/pageContentDto'
import { PAGE_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/pageContentsRoutePaths'
import { SavePageContentService } from '@modules/pageContents/services/SavePageContentService'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

const pageContentsValidator = new PageContentsValidator()

const createPageContentDtoSchema = pageContentsValidator.getCreatePageContentDtoSchema()

@ControllerDec()
export class SavePageContentController {
    constructor(
        private readonly savePageContentService: SavePageContentService = new SavePageContentService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Save page-content by page and key' })
    @PostDec(PAGE_CONTENTS_ROUTE_PATHS.save)
    public async savePageContent(
        @BodyDec(createPageContentDtoSchema) body: CreatePageContentDto,
        @AuthDec userInfo: UserInfo,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const newDto = await this.savePageContentService.savePageContent({
            initiatorOpenUserId: userInfo.open_user_id,
            createDto: body,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
    
    
}
