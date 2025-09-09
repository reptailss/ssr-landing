import {
    AuthDec,
    BuildResponseFormat,
    ControllerDec,
    DeleteDec,
    MutateRowResult,
    ParamNumDec,
    SwaggerInfoDec,
    UserInfo,
} from 'os-core-ts'
import { DeleteContactUsService } from '@modules/contactUs/services/DeleteContactUsService'
import { CONTACT_US_ROUTE_PATHS } from '@common/apiRoutePaths/contactUsRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'

@ControllerDec()
export class DeleteContactUsController {
    constructor(
        private readonly deleteContactUsService: DeleteContactUsService = new DeleteContactUsService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Delete contactus' })
    @DeleteDec(CONTACT_US_ROUTE_PATHS.delete)
    public async deleteContactUs(
        @AuthDec userInfo: UserInfo,
        @ParamNumDec('id') id: number,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const oldDto = await this.deleteContactUsService.deleteContactUsById({
            initiatorOpenUserId: userInfo.open_user_id,
            id,
        })
        return BuildResponseFormat.mutateRow(oldDto.id)
    }
}
