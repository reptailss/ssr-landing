import { ActionsLoggerService, Injectable } from 'os-core-ts'
import { SharedContentDto, UpdateSharedContentDto } from '@common/dto/sharedContentDto'
import { SharedContentsRepository } from '@modules/sharedContents/repository'

@Injectable()
export class UpdateSharedContentService {
    constructor(
        private readonly repository: SharedContentsRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    public async updateSharedContent({
                                         initiatorOpenUserId,
                                         updateDto,
                                         oldDto,
                                     }: {
        initiatorOpenUserId: number
        updateDto: UpdateSharedContentDto
        oldDto: SharedContentDto
    }): Promise<SharedContentDto> {
        
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
