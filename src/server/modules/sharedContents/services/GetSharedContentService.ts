import { SharedContentDto } from '@common/dto/sharedContentDto'
import { AppLocaleValue } from '@common/locales'
import { SharedContentsRepository } from '@modules/sharedContents/repository'
import { Injectable } from 'os-core-ts'

@Injectable()
export class GetSharedContentService {
    constructor(
        private readonly repository: SharedContentsRepository,
    ) {
    }
    
    public async getSharedContentByKey({
                                           key,
                                           locale,
                                       }: {
        key: string,
        locale?: AppLocaleValue
    }): Promise<SharedContentDto | null> {
        return this.repository.findOne({
            key,
            ...(locale ? { locale } : {}),
        })
    }
}
