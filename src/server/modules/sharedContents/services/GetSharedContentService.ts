import { sharedContentsModel, SharedContentsModel } from '@modules/sharedContents/model'
import { SharedContentDto } from '@common/dto/sharedContentDto'
import { AppLocale } from '@common/locales'

export class GetSharedContentService {
    constructor(private readonly model: SharedContentsModel = sharedContentsModel) {
    }
    
    public async getSharedContentByKey({
                                           key,
                                           locale,
                                       }: {
        key: string,
        locale?: AppLocale
    }): Promise<SharedContentDto | null> {
        return this.model.findOne({
            filters: {
                key,
                ...(locale ? { locale } : {}),
            },
        })
    }
}
