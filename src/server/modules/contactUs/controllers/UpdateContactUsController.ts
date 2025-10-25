import {
    Body,
    BuildResponseFormat,
    Controller,
    MutateRowResult,
    Param,
    Put,
    SwaggerInfo,
    User,
    UserDto,
} from 'os-core-ts'
import { ContactUsValidator } from '@modules/contactUs/validator/ContactUsValidator'
import { UpdateContactUsService } from '@modules/contactUs/services/UpdateContactUsService'
import { CONTACT_US_ROUTE_PATHS } from '@common/apiRoutePaths/contactUsRoutePaths'
import { UpdateContactUsDto } from '@common/dto/contactUsDto'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'


const contactUsValidator = new ContactUsValidator()

const updateContactUsDtoSchema = contactUsValidator.getUpdateContactUsDtoSchema()

@Controller()
export class UpdateContactUsController {
    constructor(
        private readonly updateContactUsService: UpdateContactUsService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Update contactus' })
    @Put(CONTACT_US_ROUTE_PATHS.update)
    public async updateContactUs(
        @User() userDto: UserDto,
        @Param('id') id: number,
        @Body<UpdateContactUsDto>(updateContactUsDtoSchema) body: UpdateContactUsDto,
    ): Promise<MutateRowResult<number>> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const newDto = await this.updateContactUsService.updateContactUs({
            initiatorOpenUserId: userDto.open_user_id,
            updateDto: body,
            id,
        })
        return BuildResponseFormat.mutateRow(newDto.id)
    }
}
