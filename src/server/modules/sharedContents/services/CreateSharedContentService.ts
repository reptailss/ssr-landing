import { ActionsLoggerService, Injectable } from 'os-core-ts'
import { CreateSharedContentDto, SharedContentDto } from '@common/dto/sharedContentDto'
import { SharedContentsRepository } from '@modules/sharedContents/repository'

@Injectable()
export class CreateSharedContentService {
    constructor(
        private readonly repository: SharedContentsRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    public async createSharedContent({
                                         initiatorOpenUserId,
                                         createDto,
                                     }: {
        initiatorOpenUserId: number
        createDto: CreateSharedContentDto
    }): Promise<SharedContentDto> {
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
