import { AdminAuthRequest, IFormManagerProvider } from 'admin-panel-builder'
import { AdminServerApiUrlBuilder } from '@admin-helpers/AdminServerApiUrlBuilder'
import { ContactUsDto, UpdateContactUsDto } from '@common/dto/contactUsDto'
import { CONTACT_US_ROUTE_PATHS } from '@common/apiRoutePaths/contactUsRoutePaths'
import { ContactUsListResponse } from '@common/apiResponses/contactUsResponses'


export class AdminContactUsFormManagerProvider implements IFormManagerProvider<
    ContactUsDto,
    UpdateContactUsDto
> {
    
    public async updateForm({
                                form,
                                updateForm,
                                token,
                            }: {
        form: ContactUsDto
        updateForm: UpdateContactUsDto
        locale: string | null
        token: string | null
    }): Promise<void> {
        await AdminAuthRequest.put({
            url: AdminServerApiUrlBuilder.build(CONTACT_US_ROUTE_PATHS.update),
            token: token || '',
            headers: {
                'content-type': 'application/json',
            },
            pathParams: {
                id: form.id,
            },
            body: JSON.stringify(updateForm),
        })
    }
    
    public async deleteForm({
                                form,
                                token,
                            }: {
        form: ContactUsDto
        token: string | null
    }): Promise<void> {
        await AdminAuthRequest.delete({
            url: AdminServerApiUrlBuilder.build(CONTACT_US_ROUTE_PATHS.delete),
            token: token || '',
            pathParams: {
                id: form.id,
            },
        })
    }
    
    public async getUpdateFormFromForm({
                                           token,
                                           form,
                                       }: {
        token: string | null
        form: ContactUsDto
    }): Promise<UpdateContactUsDto> {
        return {
            status: form.status,
        }
    }
    
    public async getForms({
                              token,
                              locale,
                          }: {
        locale: string | null
        token: string | null
    }): Promise<ContactUsDto[]> {
        const res: ContactUsListResponse = await AdminAuthRequest.get({
            url: AdminServerApiUrlBuilder.build(CONTACT_US_ROUTE_PATHS.list),
            token: token || '',
            searchParams: {
                page: '1',
                per_page: '0',
                'where[locale]': locale || '',
            },
        })
        return res.rows
    }
    
}