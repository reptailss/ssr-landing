import { CreateSharedContentDto, SharedContentDto } from '@common/dto/sharedContentDto'
import { CreateSharedContentService } from '@modules/sharedContents/services/CreateSharedContentService'
import { UpdateSharedContentService } from '@modules/sharedContents/services/UpdateSharedContentService'
import { GetSharedContentService } from '@modules/sharedContents/services/GetSharedContentService'

export class SaveSharedContentService {
    constructor(
        private readonly getSharedContentService: GetSharedContentService = new GetSharedContentService(),
        private readonly createSharedContentService: CreateSharedContentService = new CreateSharedContentService(),
        private readonly updateSharedContentService: UpdateSharedContentService = new UpdateSharedContentService(),
    ) {
    }
    
    public async saveSharedContent({
                                       initiatorOpenUserId,
                                       createDto,
                                   }: {
        initiatorOpenUserId: number
        createDto: CreateSharedContentDto
    }): Promise<SharedContentDto> {
        
        const oldDto = await this.getSharedContentService.getSharedContentByKey({
            key: createDto.key,
            locale: createDto.locale,
        })
        
        if (!oldDto) {
            return this.createSharedContentService.createSharedContent({
                createDto,
                initiatorOpenUserId,
            })
        }
        
        return this.updateSharedContentService.updateSharedContent({
            initiatorOpenUserId,
            updateDto: createDto,
            oldDto,
        })
    }
}
