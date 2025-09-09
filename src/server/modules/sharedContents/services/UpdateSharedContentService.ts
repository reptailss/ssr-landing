import { ActionsLoggerService } from 'os-core-ts'
import { sharedContentsModel, SharedContentsModel } from '@modules/sharedContents/model'
import { SharedContentDto, UpdateSharedContentDto } from '@common/dto/sharedContentDto'

export class UpdateSharedContentService {
    constructor(
        private readonly model: SharedContentsModel = sharedContentsModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
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
