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
import { ContactUsValidator } from '@modules/contactUs/validator/ContactUsValidator'
import { UpdateContactUsService } from '@modules/contactUs/services/UpdateContactUsService'
import { CONTACT_US_ROUTE_PATHS } from '@common/apiRoutePaths/contactUsRoutePaths'
import { UpdateContactUsDto } from '@common/dto/contactUsDto'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'


const contactUsValidator = new ContactUsValidator()

const updateContactUsDtoSchema = contactUsValidator.getUpdateContactUsDtoSchema()

@ControllerDec()
export class UpdateContactUsController {
    constructor(
        private readonly updateContactUsService: UpdateContactUsService = new UpdateContactUsService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Update contactus' })
    @PutDec(CONTACT_US_ROUTE_PATHS.update)
    public async updateContactUs(
        @AuthDec userInfo: UserInfo,
        @ParamNumDec('id') id: number,
        @BodyDec<UpdateContactUsDto>(updateContactUsDtoSchema) body: UpdateContactUsDto,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const newDto = await this.updateContactUsService.updateContactUs({
            initiatorOpenUserId: userInfo.open_user_id,
            updateDto: body,
            id,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
