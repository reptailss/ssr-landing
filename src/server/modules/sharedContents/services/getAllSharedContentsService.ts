import { AppLocale } from '@common/locales'
import { sharedContentsModel, SharedContentsModel } from '@modules/sharedContents/model'

export class GetAllSharedContentsService {
    
    constructor(
        private readonly model: SharedContentsModel = sharedContentsModel,
    ) {
    }
    
    public async getSimpleSharedContents(locale?: AppLocale | null): Promise<{
        key: string
        value: object
    }[]> {
        return this.model.findAll({
            filters: {
                ...(locale ? { locale } : {}),
            },
            attributes: [
                'key',
                'value',
            ],
        })
    }
}