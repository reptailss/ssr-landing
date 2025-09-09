import { ActionsLoggerService } from 'os-core-ts'
import { sharedContentsModel, SharedContentsModel } from '@modules/sharedContents/model'
import { CreateSharedContentDto, SharedContentDto } from '@common/dto/sharedContentDto'

export class CreateSharedContentService {
    constructor(
        private readonly model: SharedContentsModel = sharedContentsModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async createSharedContent({
                                         initiatorOpenUserId,
                                         createDto,
                                     }: {
        initiatorOpenUserId: number
        createDto: CreateSharedContentDto
    }): Promise<SharedContentDto> {
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
