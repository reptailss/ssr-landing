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
import { MediaFoldersValidator } from '@modules/mediaLibrary/mediaFolders/validator/MediaFoldersValidator'
import { CreateMediaFolderService } from '@modules/mediaLibrary/mediaFolders/services/CreateMediaFolderService'
import { MEDIA_FOLDERS_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFoldersRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'
import { CreateMediaFolderDto } from '@common/dto/mediaFolderDto'

const mediaFoldersValidator = new MediaFoldersValidator()

const createMediaFolderDtoSchema = mediaFoldersValidator.getCreateMediaFolderDtoSchema()

@ControllerDec()
export class CreateMediaFolderController {
    constructor(
        private readonly createMediaFolderService: CreateMediaFolderService = new CreateMediaFolderService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Add new media-folder' })
    @PostDec(MEDIA_FOLDERS_ROUTE_PATHS.add)
    public async createMediaFolder(
        @BodyDec(createMediaFolderDtoSchema) createDto: CreateMediaFolderDto,
        @AuthDec userInfo: UserInfo,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const newDto = await this.createMediaFolderService.createMediaFolder({
            initiatorOpenUserId: userInfo.open_user_id,
            createDto,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
