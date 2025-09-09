import content from '../content'
import fs from 'fs/promises'
import path from 'path'
import { ClientRoutePaths } from '@common/clientRoutePaths'
import { AppLocale } from '@common/locales'

export class PageDefaultContentJsonWriter {
    private readonly dirPath = path.resolve(process.cwd(), 'static', 'pagesDefaultContentJson')
    
    public async writeJson(): Promise<void> {
        await fs.mkdir(this.dirPath, { recursive: true })
        
        let count = 0
        for (const key in content) {
            const localsContent = content[key as keyof typeof content]
            for (const locale in localsContent) {
                try {
                    await fs.writeFile(
                        this.buildFilePath(key as keyof ClientRoutePaths, locale as AppLocale),
                        JSON.stringify(localsContent[locale as AppLocale]),
                        'utf8',
                    )
                } catch (error) {
                    console.log('error save json content', error)
                }
                count++
            }
            
        }
        console.log(`Total write count: ${count}`)
    }
    
    private buildFilePath(contentKey: keyof ClientRoutePaths, locale: AppLocale): string {
        return path.resolve(this.dirPath, `${contentKey}-${locale}.json`)
    }
}