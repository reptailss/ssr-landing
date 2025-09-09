import { AdminAuthRequest, IContentManagerProvider } from 'admin-panel-builder'
import { AdminServerApiUrlBuilder } from '@admin-helpers/AdminServerApiUrlBuilder'
import { PAGE_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/pageContentsRoutePaths'
import { PagesContentResponse } from '@common/apiResponses/pagesContentResponses'


export class AdminPagesContentManagerProvider implements IContentManagerProvider {
    
    public async saveContent<Value>(
        {
            fieldUrl,
            fieldKey,
            content,
            locale,
            token,
        }: {
            fieldUrl: string
            fieldKey: string
            content: Value
            locale: string | null
            token: string | null
        },
    ): Promise<void> {
        
        await AdminAuthRequest.post({
            url: AdminServerApiUrlBuilder.build(PAGE_CONTENTS_ROUTE_PATHS.save),
            token: token || '',
            body: JSON.stringify({
                key: fieldKey,
                value: content,
                page: fieldUrl,
                locale,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    
    public async getInitialContent<Value>({
                                              fieldUrl,
                                              fieldKey,
                                              locale,
                                              token,
                                          }: {
                                              fieldUrl: string
                                              fieldKey: string
                                              locale: string | null
                                              token: string | null
                                          },
    ): Promise<Value | null> {
        
        const res: PagesContentResponse<Value> = await AdminAuthRequest.get({
            url: AdminServerApiUrlBuilder.build(PAGE_CONTENTS_ROUTE_PATHS.getByPageAndKey),
            token: token || '',
            searchParams: {
                page: fieldUrl,
                key: fieldKey,
                locale: locale || '',
            },
        })
        return res.row.value
    }
    
    
    public async deleteContent({
                                   fieldUrl,
                                   fieldKey,
                                   locale,
                                   token,
                               }: {
                                   fieldUrl: string
                                   fieldKey: string
                                   locale: string | null
                                   token: string | null
                               },
    ): Promise<void> {
        
        await AdminAuthRequest.delete({
            url: AdminServerApiUrlBuilder.build(PAGE_CONTENTS_ROUTE_PATHS.deleteByPageAndKey),
            token: token || '',
            searchParams: {
                page: fieldUrl,
                key: fieldKey,
                locale: locale || '',
            },
        })
    }
}