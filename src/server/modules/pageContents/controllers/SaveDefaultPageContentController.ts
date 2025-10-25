import {
    Body,
    BuildResponseFormat,
    Controller,
    MutateRowResult,
    Post,
    SchemaValidator,
    SwaggerInfo,
    User,
    UserDto,
    Validator,
} from 'os-core-ts'
import { PAGE_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/pageContentsRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'
import { SavePageDefaultContentService } from '@modules/pageContents/services/SavePageDefaultContentService'
import { AppLocaleValue } from '@common/locales'


type SaveDefaultPageContentBody = {
    locale: AppLocaleValue
    page: string
    key: string
}

const saveDefaultPageContentSchema: SchemaValidator<SaveDefaultPageContentBody> = Validator.object({
    page: Validator.string().max(255),
    key: Validator.string().max(255),
    locale: Validator.string().max(255) as SchemaValidator<AppLocaleValue>,
})

@Controller()
export class SaveDefaultPageContentController {
    constructor(
        private readonly savePageDefaultContentService: SavePageDefaultContentService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Reset to default page content' })
    @Post(PAGE_CONTENTS_ROUTE_PATHS.resetToDefaultPageContent)
    public async resetToDefaultPageContent(
        @Body<SaveDefaultPageContentBody>(saveDefaultPageContentSchema) body: SaveDefaultPageContentBody,
        @User() userDto: UserDto,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const dto = await this.savePageDefaultContentService.resetToDefaultPageContent({
            initiatorOpenUserId: userDto.open_user_id,
            page: body.page,
            locale: body.locale,
            key: body.key,
        })
        return BuildResponseFormat.mutateRow(dto.id)
    }
    
    
}
