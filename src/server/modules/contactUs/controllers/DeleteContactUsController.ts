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
import { DeleteContactUsService } from '@modules/contactUs/services/DeleteContactUsService'
import { CONTACT_US_ROUTE_PATHS } from '@common/apiRoutePaths/contactUsRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@Controller()
export class DeleteContactUsController {
    constructor(
        private readonly deleteContactUsService: DeleteContactUsService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Delete contactus' })
    @Delete(CONTACT_US_ROUTE_PATHS.delete)
    public async deleteContactUs(
        @User() userDto: UserDto,
        @Param('id') id: number,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const oldDto = await this.deleteContactUsService.deleteContactUsById({
            initiatorOpenUserId: userDto.open_user_id,
            id,
        })
        return BuildResponseFormat.mutateRow(oldDto.id)
    }
}
