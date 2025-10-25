import { Body, BuildResponseFormat, Controller, MutateRowResult, Post, SwaggerInfo, User, UserDto } from 'os-core-ts'
import { SharedContentsValidator } from '@modules/sharedContents/validator/SharedContentsValidator'
import { CreateSharedContentDto } from '@common/dto/sharedContentDto'
import { SHARED_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/sharedContentRoutePaths'
import { SaveSharedContentService } from '@modules/sharedContents/services/SaveSharedContentService'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

const sharedContentsValidator = new SharedContentsValidator()

const createSharedContentBodySchema = sharedContentsValidator.getCreateSharedContentDtoSchema()

@Controller()
export class SaveSharedContentController {
    constructor(
        private readonly saveSharedContentService: SaveSharedContentService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Save shared-content by key' })
    @Post(SHARED_CONTENTS_ROUTE_PATHS.save)
    public async saveSharedContent(
        @Body(createSharedContentBodySchema) body: CreateSharedContentDto,
        @User() userDto: UserDto,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const newDto = await this.saveSharedContentService.saveSharedContent({
            initiatorOpenUserId: userDto.open_user_id,
            createDto: body,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
