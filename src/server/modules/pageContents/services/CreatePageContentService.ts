import { ActionsLoggerService, Injectable } from 'os-core-ts'
import { CreatePageContentDto, PageContentDto } from '@common/dto/pageContentDto'
import { PageContentsRepository } from '@modules/pageContents/repository'

@Injectable()
export class CreatePageContentService {
    constructor(
        private readonly repository: PageContentsRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    public async createPageContent({
                                       initiatorOpenUserId,
                                       createDto,
                                   }: {
        initiatorOpenUserId: number
        createDto: CreatePageContentDto
    }): Promise<PageContentDto> {
        const newDto = await this.repository.create(createDto)
        await this.actionsLoggerService.logCreateAction({
            value: newDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: newDto.id,
        })
        
        return newDto
    }
}
