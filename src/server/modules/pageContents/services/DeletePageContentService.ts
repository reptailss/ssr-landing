import { ActionsLoggerService, AppError, Injectable } from 'os-core-ts'
import { PageContentDto } from '@common/dto/pageContentDto'
import { AppLocaleValue } from '@common/locales'
import { PageContentsRepository } from '@modules/pageContents/repository'

@Injectable()
export class DeletePageContentService {
    constructor(
        private readonly repository: PageContentsRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    
    public async deletePageContentByPageAndKey({
                                                   page,
                                                   key,
                                                   locale,
                                                   initiatorOpenUserId,
                                               }: {
        page: string,
        key: string,
        locale?: AppLocaleValue
        initiatorOpenUserId: number
    }): Promise<PageContentDto> {
        
        const oldDto = await this.repository.findOne({
            page,
            key,
            ...(locale ? { locale } : {}),
        })
        
        if (!oldDto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        await this.repository.destroy({ id: oldDto.id })
        
        await this.actionsLoggerService.logDeleteAction({
            oldValue: oldDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: oldDto.id,
        })
        
        return oldDto
    }
}
