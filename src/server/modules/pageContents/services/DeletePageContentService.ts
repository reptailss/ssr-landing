import { ActionsLoggerService, AppError } from 'os-core-ts'
import { pageContentsModel, PageContentsModel } from '@modules/pageContents/model'
import { PageContentDto } from '@common/dto/pageContentDto'
import { AppLocale } from '@common/locales'

export class DeletePageContentService {
    constructor(
        private readonly model: PageContentsModel = pageContentsModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
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
        locale?: AppLocale
        initiatorOpenUserId: number
    }): Promise<PageContentDto> {
        
        const oldDto = await this.model.findOne({
            filters: {
                page,
                key,
                ...(locale ? { locale } : {}),
            },
        })
        if (!oldDto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        await this.model.destroy({
            filters: { id: oldDto.id },
        })
        
        await this.actionsLoggerService.logDeleteAction({
            oldValue: oldDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: oldDto.id,
        })
        
        return oldDto
    }
}
