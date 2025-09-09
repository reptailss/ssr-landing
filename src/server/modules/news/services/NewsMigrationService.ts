import { CreateMultilanguageNewsDto } from '@common/dto/newsDto'
import fs from 'fs/promises'
import path from 'path'
import { CreateNewsService } from '@modules/news/services/CreateNewsService'
import { appLogger } from 'os-core-ts'
import { DEFAULT_APP_LOCALE } from '@common/locales'
import { GetNewsService } from '@modules/news/services/GetNewsService'


export class NewsMigrationService {
    
    constructor(
        private readonly createNewsService: CreateNewsService = new CreateNewsService(),
        private readonly getNewsService: GetNewsService = new GetNewsService(),
    ) {
    }
    
    public async saveNews(): Promise<void> {
        
        try {
            const news = await this.readFromFile()
            if (!news.length) {
                return
            }
            let count  = 0;
            const reverseNews = news.reverse()
            for (const newsDto of reverseNews) {
                try {
                    const defaultLocaleField = newsDto.multilanguage_field[DEFAULT_APP_LOCALE]
                    const oldDtoByUniqColumn = await this.getNewsService.getByTitleAndLocale(
                        defaultLocaleField.title,
                        DEFAULT_APP_LOCALE,
                    )
                    if (oldDtoByUniqColumn) {
                        continue
                    }
                    await this.createNewsService.createMultilanguageNews({
                        initiatorOpenUserId: 0,
                        createMultilanguageDto: newsDto,
                    })
                    count++
                } catch (error) {
                    appLogger.error(error,JSON.stringify(newsDto.base_field.image))
                    break
                }
            }
            appLogger.info(`Successfully created new multilanguage news count:${count}`)
        } catch (error) {
            appLogger.error(error)
        }
    }
    
    private async readFromFile(): Promise<CreateMultilanguageNewsDto[]> {
        const filePath = this.buildFilePath()
        const fileContent = await fs.readFile(filePath, 'utf8')
        return JSON.parse(fileContent) as CreateMultilanguageNewsDto[]
    }
    
    private buildFilePath(): string {
        return path.resolve(process.cwd(), 'static', 'newsJson', 'news.json')
    }
}