import { AdminServerApiUrlBuilder } from '@admin-helpers/AdminServerApiUrlBuilder'
import { AbstractMediaValueProvider, AdminAuthRequest, IMediaValueProvider } from 'admin-panel-builder'
import { MEDIA_FILES_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFilesRoutePaths'
import { MediaFilesListResponse } from '@common/apiResponses/mediaFilesReponses'
import { MEDIA_FOLDERS_ROUTE_PATHS } from '@common/apiRoutePaths/mediaFoldersRoutePaths'
import { MediaFoldersListResponse } from '@common/apiResponses/mediaFoldersResponses'


export class AdminMediaProvider extends AbstractMediaValueProvider implements IMediaValueProvider {
    
    public async createMediaFile({
                                     file,
                                     name,
                                     folder_id,
                                     token,
                                 }: {
        file: File,
        name: string,
        folder_id: number
        token: string | null
    }): Promise<void> {
        const formData = new FormData()
        
        formData.append('name', name)
        formData.append('folder_id', folder_id.toString())
        formData.append('file', file)
        
        await AdminAuthRequest.post({
            url: AdminServerApiUrlBuilder.build(MEDIA_FILES_ROUTE_PATHS.add),
            token: token || '',
            body: formData,
        })
    }
    
    public async deleteMediaFile({
                                     id,
                                     token,
                                 }: {
        id: number | string
        token: string | null
    }): Promise<void> {
        
        await AdminAuthRequest.delete({
            url: AdminServerApiUrlBuilder.build(MEDIA_FILES_ROUTE_PATHS.delete),
            token: token || '',
            pathParams: {
                id,
            },
        })
        
    }
    
    public async getAllMediaFiles({
                                      token,
                                  }: {
        token: string | null
    }): Promise<{
        name: string
        folder_id: number
        file: string
        id: number
        mimetype: string | null
    }[]> {
        const res: MediaFilesListResponse = await AdminAuthRequest.get({
            url: AdminServerApiUrlBuilder.build(MEDIA_FILES_ROUTE_PATHS.list),
            token: token || '',
            searchParams: {
                page: '1',
                per_page: '0',
            },
        })
        return res.rows
    }
    
    public async createMediaFolder({
                                       name,
                                       parent_id,
                                       token,
                                   }: {
        name: string
        parent_id: number
        token: string | null
    }): Promise<void> {
        
        
        await AdminAuthRequest.post({
            url: AdminServerApiUrlBuilder.build(MEDIA_FOLDERS_ROUTE_PATHS.add),
            token: token || '',
            body: JSON.stringify({
                name,
                parent_id,
            }),
            headers: {
                'content-type': 'application/json',
            },
        })
    }
    
    public async updateMediaFolder({
                                       name,
                                       parent_id,
                                       id,
                                       token,
                                   }: {
        name: string
        parent_id: number
        id: number | string
        token: string | null
    }): Promise<void> {
        
        await AdminAuthRequest.put({
            url: AdminServerApiUrlBuilder.build(MEDIA_FOLDERS_ROUTE_PATHS.update),
            token: token || '',
            body: JSON.stringify({
                name,
                parent_id,
            }),
            headers: {
                'content-type': 'application/json',
            },
            pathParams: {
                id,
            },
        })
    }
    
    public async deleteMediaFolder({
                                       id,
                                       token,
                                   }: {
        id: number
        token: string | null
    }): Promise<void> {
        
        await AdminAuthRequest.delete({
            url: AdminServerApiUrlBuilder.build(MEDIA_FOLDERS_ROUTE_PATHS.delete),
            token: token || '',
            pathParams: {
                id,
            },
        })
    }
    
    public async getAllMediaFolders({
                                        token,
                                    }: {
        token: string | null
    }): Promise<{
        name: string
        parent_id: number
        id: number
    }[]> {
        
        const res: MediaFoldersListResponse = await AdminAuthRequest.get({
            url: AdminServerApiUrlBuilder.build(MEDIA_FOLDERS_ROUTE_PATHS.list),
            token: token || '',
            searchParams: {
                page: '1',
                per_pag: '0',
            },
        })
        return res.rows
    }
}


