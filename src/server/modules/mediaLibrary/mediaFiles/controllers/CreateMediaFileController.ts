import {
    AppFile,
    AppFormData,
    BuildResponseFormat,
    Controller,
    IAppFile,
    MutateRowResult,
    Post,
    SwaggerInfo,
    User,
    UserDto,
} from 'os-core-ts'
import { MediaFilesValidator } from '@modules/mediaLibrary/mediaFiles/validator/MediaFilesValidator'
import { CreateMediaFileService } from '@modules/mediaLibrary/mediaFiles/services/CreateMediaFileService'
import { CreateMediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { MEDIA_FILES_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFilesRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

const mediaFilesValidator = new MediaFilesValidator()

const createMediaFileDtoSchema = mediaFilesValidator.getCreateMediaFileDtoSchema()

@Controller()
export class CreateMediaFileController {
    constructor(
        private readonly createMediaFileService: CreateMediaFileService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Add new media-file' })
    @Post(MEDIA_FILES_ROUTE_PATHS.add)
    public async createMediaFile(
        @AppFormData(createMediaFileDtoSchema) createDto: CreateMediaFileDto,
        @AppFile({
            fileKey: 'file',
            required: true,
        }) file: IAppFile,
        @User() userDto: UserDto,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const newDto = await this.createMediaFileService.createMediaFileByFile({
            initiatorOpenUserId: userDto.open_user_id,
            createDto,
            file,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
