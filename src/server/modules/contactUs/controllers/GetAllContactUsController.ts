import {
    AuthDec,
    BuildResponseFormat,
    ControllerDec,
    GetDec,
    PaginationQueryParams,
    PaginationQueryParamsDec,
    SwaggerInfoDec,
    UserInfo,
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

@ControllerDec()
export class GetAllContactUsController {
    constructor(
        private readonly getAllContactUsService: GetAllContactUsService = new GetAllContactUsService(),
        private readonly checkUserAccessService: CheckUserAccessService = new CheckUserAccessService(),
    ) {
    }
    
    @SwaggerInfoDec({ summary: 'Get contactus list' })
    @GetDec(CONTACT_US_ROUTE_PATHS.list)
    public async getContactUsPagination(
        @AuthDec userInfo: UserInfo,
        @PaginationQueryParamsDec(contactUsDtoPaginationQueryParamsSchema)
        params: PaginationQueryParams<ContactUsDto>,
    ): Promise<ContactUsListResponse> {
        
        await this.checkUserAccessService.checkIsAdmins(userInfo.open_user_id)
        
        const paginationValues = await this.getAllContactUsService.getContactUsPagination(params)
        return BuildResponseFormat.pagination(paginationValues)
    }
}
