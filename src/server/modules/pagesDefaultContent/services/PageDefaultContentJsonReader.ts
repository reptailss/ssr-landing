import fs from 'fs/promises'
import path from 'path'
import { ClientRoutePaths } from '@common/clientRoutePaths'
import { AppLocale } from '@common/locales'

export class PageDefaultContentJsonReader {
    private readonly dirPath = path.resolve(process.cwd(), 'static', 'pagesDefaultContentJson')
    
    private buildFilePath(routeKey: keyof ClientRoutePaths, locale: AppLocale): string {
        return path.resolve(this.dirPath, `${routeKey}-${locale}.json`)
    }
    
    public async readJson<T = Record<string, unknown>>(
        routeKey: keyof ClientRoutePaths,
        locale: AppLocale,
    ): Promise<T> {
        const filePath = this.buildFilePath(routeKey, locale)
        const fileContent = await fs.readFile(filePath, 'utf8')
        return JSON.parse(fileContent) as T
    }
}
