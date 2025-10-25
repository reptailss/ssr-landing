import {
    BuildResponseFormat,
    Controller,
    Delete,
    MutateRowResult,
    Param,
    SwaggerInfo,
    User,
    UserDto,
} from 'os-core-ts'
import { DeleteMediaFileService } from '@modules/mediaLibrary/mediaFiles/services/DeleteMediaFileService'
import { MEDIA_FILES_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFilesRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@Controller()
export class DeleteMediaFileController {
    constructor(
        private readonly deleteMediaFileService: DeleteMediaFileService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Delete media-file' })
    @Delete(MEDIA_FILES_ROUTE_PATHS.delete)
    public async deleteMediaFile(
        @User() userDto: UserDto,
        @Param('id') id: number,
    ): Promise<MutateRowResult<number>> {
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const oldDto = await this.deleteMediaFileService.deleteMediaFileById({
            initiatorOpenUserId: userDto.open_user_id,
            id,
        })
        return BuildResponseFormat.mutateRow(oldDto.id)
    }
}
