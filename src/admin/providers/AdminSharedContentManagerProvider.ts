import { AdminAuthRequest, IContentManagerProvider } from 'admin-panel-builder'
import { AdminServerApiUrlBuilder } from '@admin-helpers/AdminServerApiUrlBuilder'
import { SHARED_CONTENTS_ROUTE_PATHS } from '@common/apiRoutePaths/sharedContentRoutePaths'


export class AdminSharedContentManagerProvider implements IContentManagerProvider {
    
    public async saveContent<Value>(
        {
            fieldKey,
            content,
            locale,
            token,
        }: {
            fieldKey: string
            content: Value
            locale: string | null
            token: string | null
        },
    ): Promise<void> {
        await AdminAuthRequest.post({
            url: AdminServerApiUrlBuilder.build(SHARED_CONTENTS_ROUTE_PATHS.save),
            token: token || '',
            body: JSON.stringify({
                key: fieldKey,
                value: content,
                locale,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    
    public async getInitialContent<Value>({
                                              fieldKey,
                                              locale,
                                              token,
                                          }: {
                                              fieldKey: string
                                              locale: string | null
                                              token: string | null
                                          },
    ): Promise<Value | null> {
        
        const res: {
            row: {
                value: Value
            }
        } = await AdminAuthRequest.get({
            url: AdminServerApiUrlBuilder.build(SHARED_CONTENTS_ROUTE_PATHS.getByKey),
            token: token || '',
            searchParams: {
                key: fieldKey,
                locale: locale || '',
            },
        })
        
        return res.row.value
    }
    
    
    public async deleteContent({
                                   fieldKey,
                                   locale,
                                   token,
                               }: {
                                   fieldKey: string
                                   locale: string | null
                                   token: string | null
                               },
    ): Promise<void> {
        await AdminAuthRequest.delete({
            url: AdminServerApiUrlBuilder.build(SHARED_CONTENTS_ROUTE_PATHS.deleteByKey),
            token: token || '',
            searchParams: {
                key: fieldKey,
                locale: locale || '',
            },
        })
        
    }
}