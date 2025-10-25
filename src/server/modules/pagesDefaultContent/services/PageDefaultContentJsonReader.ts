import fs from 'fs/promises'
import path from 'path'
import { ClientRoutePaths } from '@common/clientRoutePaths'
import { AppLocaleValue } from '@common/locales'
import { Injectable } from 'os-core-ts'

@Injectable()
export class PageDefaultContentJsonReader {
    private readonly dirPath = path.resolve(process.cwd(), 'static', 'pagesDefaultContentJson')
    
    private buildFilePath(routeKey: keyof ClientRoutePaths, locale: AppLocaleValue): string {
        return path.resolve(this.dirPath, `${routeKey}-${locale}.json`)
    }
    
    public async readJson<T = Record<string, unknown>>(
        routeKey: keyof ClientRoutePaths,
        locale: AppLocaleValue,
    ): Promise<T> {
        const filePath = this.buildFilePath(routeKey, locale)
        const fileContent = await fs.readFile(filePath, 'utf8')
        return JSON.parse(fileContent) as T
    }
}
