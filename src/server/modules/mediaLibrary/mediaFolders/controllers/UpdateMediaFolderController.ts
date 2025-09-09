import {
    AuthDec,
    BodyDec,
    BuildResponseFormat,
    ControllerDec,
    MutateRowResult,
    ParamNumDec,
    PutDec,
    SwaggerInfoDec,
    UserInfo,
} from 'os-core-ts'
import { MediaFoldersValidator } from '@modules/mediaLibrary/mediaFolders/validator/MediaFoldersValidator'
import { UpdateMediaFolderService } from '@modules/mediaLibrary/mediaFolders/services/UpdateMediaFolderService'
import { MEDIA_FOLDERS_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFoldersRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'
import { UpdateMediaFolderDto } from '@common/dto/mediaFolderDto'

const mediaFoldersValidator = new MediaFoldersValidator()

const updateMediaFolderDtoSchema = mediaFoldersValidator.getUpdateMediaFolderDtoSchema()

@ControllerDec()
export class UpdateMediaFolderController {
    constructor(
        private readonly updateMediaFolderService: UpdateMediaFolderService = new UpdateMediaFolderService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Update media-folder by id' })
    @PutDec(MEDIA_FOLDERS_ROUTE_PATHS.update)
    public async updateMediaFolder(
        @BodyDec(updateMediaFolderDtoSchema) updateDto: UpdateMediaFolderDto,
        @AuthDec userInfo: UserInfo,
        @ParamNumDec('id') id: number,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        
        const newDto = await this.updateMediaFolderService.updateMediaFolder({
            initiatorOpenUserId: userInfo.open_user_id,
            updateDto,
            id,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
