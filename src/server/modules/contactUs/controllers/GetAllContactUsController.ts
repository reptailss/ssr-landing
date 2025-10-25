import {
    BuildResponseFormat,
    Controller,
    Get,
    PaginationParams,
    PaginationQueryParams,
    SwaggerInfo,
    User,
    UserDto,
} from 'os-core-ts'
import { ContactUsValidator } from '@modules/contactUs/validator/ContactUsValidator'
import { GetAllContactUsService } from '@modules/contactUs/services/GetAllContactUsService'
import { ContactUsDto } from '@common/dto/contactUsDto'
import { CONTACT_US_ROUTE_PATHS } from '@common/apiRoutePaths/contactUsRoutePaths'
import { CheckUserAccessService } from '@modules/userAccess/services/CheckUserAccessService'
import { ContactUsListResponse } from '@common/apiResponses/contactUsResponses'

const contactUsValidator = new ContactUsValidator()
const contactUsDtoPaginationQueryParamsSchema =
    contactUsValidator.getContactUsDtoPaginationQueryParamsSchema()

@Controller()
export class GetAllContactUsController {
    constructor(
        private readonly getAllContactUsService: GetAllContactUsService,
        private readonly checkUserAccessService: CheckUserAccessService,
    ) {
    }
    
    @SwaggerInfo({ summary: 'Get contactus list' })
    @Get(CONTACT_US_ROUTE_PATHS.list)
    public async getContactUsPagination(
        @User() userDto: UserDto,
        @PaginationParams(contactUsDtoPaginationQueryParamsSchema)
        params: PaginationQueryParams<ContactUsDto>,
    ): Promise<ContactUsListResponse> {
        
        await this.checkUserAccessService.checkIsAdmins(userDto.open_user_id)
        
        const paginationValues = await this.getAllContactUsService.getContactUsPagination(params)
        return BuildResponseFormat.pagination(paginationValues)
    }
}
