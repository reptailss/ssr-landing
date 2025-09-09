import { CLIENT_ROUTE_PATHS, ClientRoutePaths } from '@common/clientRoutePaths'
import { APP_LOCALES, AppLocale } from '@common/locales'
import { PageDefaultContentJsonReader } from '@modules/pagesDefaultContent/services/PageDefaultContentJsonReader'
import { AppError, appLogger } from 'os-core-ts'
import { SavePageContentService } from '@modules/pageContents/services/SavePageContentService'
import { PageContentDto } from '@common/dto/pageContentDto'

export class SavePageDefaultContentService {
    
    constructor(
        private readonly savePageContentService: SavePageContentService = new SavePageContentService(),
        private readonly pageDefaultContentJsonReader: PageDefaultContentJsonReader = new PageDefaultContentJsonReader(),
    ) {
    }
    
    
    public async resetToDefaultPageContent({
                                               locale,
                                               page,
                                               initiatorOpenUserId,
                                               key,
                                           }: {
        locale: AppLocale
        page: string
        key: string
        initiatorOpenUserId: number
    }): Promise<PageContentDto> {
        
        const routeKey = this.getRouteKeyByPagePath(page)
        if (!routeKey) {
            throw new AppError('Not found page', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        const values = await this.pageDefaultContentJsonReader.readJson(
            routeKey as keyof ClientRoutePaths,
            locale as AppLocale,
        )
        if (!values || !(key in values)) {
            throw new AppError('Not found key in page', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        return await this.savePageContentService.savePageContent({
            createDto: {
                page: page,
                key: key,
                locale,
                value: values[key] as object,
            },
            initiatorOpenUserId,
        })
    }
    
    public async saveAllDefaultPagesContentIfNotExists(): Promise<void> {
        let count = 0
        for (const routeKey in CLIENT_ROUTE_PATHS) {
            for (const locale of APP_LOCALES) {
                try {
                    const values = await this.pageDefaultContentJsonReader.readJson(
                        routeKey as keyof ClientRoutePaths,
                        locale as AppLocale,
                    )
                    if (!values) {
                        continue
                    }
                    for (const valueKey in values) {
                        await this.savePageContentService.savePageContentIfNotExists({
                            createDto: {
                                page: CLIENT_ROUTE_PATHS[routeKey as keyof ClientRoutePaths],
                                key: valueKey,
                                locale,
                                value: values[valueKey] as object,
                            },
                            initiatorOpenUserId: 0,
                        })
                        count++
                    }
                } catch (error) {
                    appLogger.error('error save default Content', error)
                }
                
            }
        }
        appLogger.info(`Success save page default content:${count}`)
    }
    
    private getRouteKeyByPagePath(pagePath: string): keyof ClientRoutePaths | null {
        for (const routeKey in CLIENT_ROUTE_PATHS) {
            if (CLIENT_ROUTE_PATHS[routeKey as keyof ClientRoutePaths] === pagePath) {
                return routeKey as keyof ClientRoutePaths
            }
        }
        return null
    }
}