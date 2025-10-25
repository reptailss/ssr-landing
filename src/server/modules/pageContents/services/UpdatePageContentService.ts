import { ActionsLoggerService, Injectable } from 'os-core-ts'
import { PageContentDto, UpdatePageContentDto } from '@common/dto/pageContentDto'
import { PageContentsRepository } from '@modules/pageContents/repository'

@Injectable()
export class UpdatePageContentService {
    constructor(
        private readonly repository: PageContentsRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
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
        
        const newDto = await this.repository.update(updateDto, {
            id: oldDto.id,
        })
        
        await this.actionsLoggerService.logUpdateAction({
            oldValue: oldDto,
            newValue: newDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: oldDto.id,
        })
        
        return newDto
    }
}
