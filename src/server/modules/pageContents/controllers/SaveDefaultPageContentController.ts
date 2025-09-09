import {
    AuthDec,
    BodyDec,
    BuildResponseFormat,
    ControllerDec,
    MutateRowResult,
    PostDec,
    SchemaValidator,
    SwaggerInfoDec,
    UserInfo,
    Validator,
} from 'os-core-ts'
import { PAGE_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/pageContentsRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'
import { SavePageDefaultContentService } from '@modules/pageContents/services/SavePageDefaultContentService'
import { AppLocale } from '@common/locales'


type SaveDefaultPageContentBody = {
    locale: AppLocale
    page: string
    key: string
}

const saveDefaultPageContentSchema: SchemaValidator<SaveDefaultPageContentBody> = Validator.object({
    page: Validator.string().max(255),
    key: Validator.string().max(255),
    locale: Validator.string().max(255) as SchemaValidator<AppLocale>,
})

@ControllerDec()
export class SaveDefaultPageContentController {
    constructor(
        private readonly savePageDefaultContentService: SavePageDefaultContentService = new SavePageDefaultContentService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Reset to default page content' })
    @PostDec(PAGE_CONTENTS_ROUTE_PATHS.resetToDefaultPageContent)
    public async resetToDefaultPageContent(
        @BodyDec<SaveDefaultPageContentBody>(saveDefaultPageContentSchema) body: SaveDefaultPageContentBody,
        @AuthDec userInfo: UserInfo,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const dto = await this.savePageDefaultContentService.resetToDefaultPageContent({
            initiatorOpenUserId: userInfo.open_user_id,
            page: body.page,
            locale: body.locale,
            key: body.key,
        })
        return BuildResponseFormat.mutateRow(dto.id)
    }
    
    
}
