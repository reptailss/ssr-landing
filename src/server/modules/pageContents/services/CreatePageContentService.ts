import { ActionsLoggerService } from 'os-core-ts'
import { pageContentsModel, PageContentsModel } from '@modules/pageContents/model'
import { CreatePageContentDto, PageContentDto } from '@common/dto/pageContentDto'

export class CreatePageContentService {
    constructor(
        private readonly model: PageContentsModel = pageContentsModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async createPageContent({
                                       initiatorOpenUserId,
                                       createDto,
                                   }: {
        initiatorOpenUserId: number
        createDto: CreatePageContentDto
    }): Promise<PageContentDto> {
        const newDto = await this.model.create(createDto)
        await this.actionsLoggerService.logCreateAction({
            value: newDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: newDto.id,
        })
        
        return newDto
    }
}
