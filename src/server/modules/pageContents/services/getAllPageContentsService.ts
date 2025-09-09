import { AppLocale } from '@common/locales'
import { PageContentsModel, pageContentsModel } from '@modules/pageContents/model'

export class GetAllPageContentsService {
    
    constructor(
        private readonly model: PageContentsModel = pageContentsModel,
    ) {
    }
    
    public async getSimpleContentsByPage(page: string, locale?: AppLocale | null): Promise<{
        key: string
        value: object
    }[]> {
        return this.model.findAll({
            filters: {
                page,
                ...(locale ? { locale } : {}),
            },
            attributes: [
                'key',
                'value',
            ],
        })
    }
}