import {
    AppFile,
    AppFileDec,
    AuthDec,
    BuildResponseFormat,
    ControllerDec,
    FormDataDec,
    MutateRowResult,
    PostDec,
    SwaggerInfoDec,
    UserInfo,
} from 'os-core-ts'
import { MediaFilesValidator } from '@modules/mediaLibrary/mediaFiles/validator/MediaFilesValidator'
import { CreateMediaFileService } from '@modules/mediaLibrary/mediaFiles/services/CreateMediaFileService'
import { CreateMediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { MEDIA_FILES_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFilesRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

const mediaFilesValidator = new MediaFilesValidator()

const createMediaFileDtoSchema = mediaFilesValidator.getCreateMediaFileDtoSchema()

@ControllerDec()
export class CreateMediaFileController {
    constructor(
        private readonly createMediaFileService: CreateMediaFileService = new CreateMediaFileService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Add new media-file' })
    @PostDec(MEDIA_FILES_ROUTE_PATHS.add)
    public async createMediaFile(
        @FormDataDec(createMediaFileDtoSchema) createDto: CreateMediaFileDto,
        @AppFileDec({
            fileKey: 'file',
            required: true,
        }) file: AppFile,
        @AuthDec userInfo: UserInfo,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const newDto = await this.createMediaFileService.createMediaFileByFile({
            initiatorOpenUserId: userInfo.open_user_id,
            createDto,
            file,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
