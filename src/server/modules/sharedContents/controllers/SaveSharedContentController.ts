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
import { SharedContentsValidator } from '@modules/sharedContents/validator/SharedContentsValidator'
import { CreateSharedContentDto } from '@common/dto/sharedContentDto'
import { SHARED_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/sharedContentRoutePaths'
import { SaveSharedContentService } from '@modules/sharedContents/services/SaveSharedContentService'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

const sharedContentsValidator = new SharedContentsValidator()

const createSharedContentBodySchema = sharedContentsValidator.getCreateSharedContentDtoSchema()

@ControllerDec()
export class SaveSharedContentController {
    constructor(
        private readonly saveSharedContentService: SaveSharedContentService = new SaveSharedContentService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Save shared-content by key' })
    @PostDec(SHARED_CONTENTS_ROUTE_PATHS.save)
    public async saveSharedContent(
        @BodyDec(createSharedContentBodySchema) body: CreateSharedContentDto,
        @AuthDec userInfo: UserInfo,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const newDto = await this.saveSharedContentService.saveSharedContent({
            initiatorOpenUserId: userInfo.open_user_id,
            createDto: body,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
