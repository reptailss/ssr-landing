import { ActionsLoggerService } from 'os-core-ts'
import { pageContentsModel, PageContentsModel } from '@modules/pageContents/model'
import { PageContentDto, UpdatePageContentDto } from '@common/dto/pageContentDto'

export class UpdatePageContentService {
    constructor(
        private readonly model: PageContentsModel = pageContentsModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async updatePageContent({
                                       initiatorOpenUserId,
                                       updateDto,
                                       oldDto,
                                   }: {
        initiatorOpenUserId: number
        updateDto: UpdatePageContentDto
        oldDto: PageContentDto
    }): Promise<PageContentDto> {
        
        const newDto = await this.model.update(updateDto, {
            filters: { id: oldDto.id },
            returning: true,
        })
        
        await this.actionsLoggerService.logUpdateAction({
            oldValue: oldDto,
            newValue: newDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: oldDto.id,
        })
        
        return newDto
    }
}
