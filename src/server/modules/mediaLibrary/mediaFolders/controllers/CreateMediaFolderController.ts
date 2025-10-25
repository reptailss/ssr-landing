import { Body, BuildResponseFormat, Controller, MutateRowResult, Post, SwaggerInfo, User, UserDto } from 'os-core-ts'
import { MediaFoldersValidator } from '@modules/mediaLibrary/mediaFolders/validator/MediaFoldersValidator'
import { CreateMediaFolderService } from '@modules/mediaLibrary/mediaFolders/services/CreateMediaFolderService'
import { MEDIA_FOLDERS_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFoldersRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'
import { CreateMediaFolderDto } from '@common/dto/mediaFolderDto'

const mediaFoldersValidator = new MediaFoldersValidator()

const createMediaFolderDtoSchema = mediaFoldersValidator.getCreateMediaFolderDtoSchema()

@Controller()
export class CreateMediaFolderController {
    constructor(
        private readonly createMediaFolderService: CreateMediaFolderService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Add new media-folder' })
    @Post(MEDIA_FOLDERS_ROUTE_PATHS.add)
    public async createMediaFolder(
        @Body(createMediaFolderDtoSchema) createDto: CreateMediaFolderDto,
        @User() userDto: UserDto,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const newDto = await this.createMediaFolderService.createMediaFolder({
            initiatorOpenUserId: userDto.open_user_id,
            createDto,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
