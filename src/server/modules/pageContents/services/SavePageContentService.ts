import { CreatePageContentDto, PageContentDto } from '@common/dto/pageContentDto'
import { CreatePageContentService } from '@modules/pageContents/services/CreatePageContentService'
import { UpdatePageContentService } from '@modules/pageContents/services/UpdatePageContentService'
import { GetPageContentService } from '@modules/pageContents/services/GetPageContentService'
import { Injectable } from 'os-core-ts'

@Injectable()
export class SavePageContentService {
    constructor(
        private readonly createPageContentService: CreatePageContentService,
        private readonly getPageContentService: GetPageContentService,
        private readonly updatePageContentService: UpdatePageContentService,
    ) {
    }
    
    public async savePageContent({
                                     initiatorOpenUserId,
                                     createDto,
                                 }: {
        initiatorOpenUserId: number
        createDto: CreatePageContentDto
    }): Promise<PageContentDto> {
        
        const oldDto = await this.getPageContentService.getPageContentByPageAndKey({
            page: createDto.page,
            key: createDto.key,
            locale: createDto.locale,
        })
        
        if (!oldDto) {
            return this.createPageContentService.createPageContent({
                createDto,
                initiatorOpenUserId,
            })
        }
        
        return this.updatePageContentService.updatePageContent({
            initiatorOpenUserId,
            updateDto: createDto,
            oldDto,
        })
    }
    
    public async savePageContentIfNotExists({
                                                initiatorOpenUserId,
                                                createDto,
                                            }: {
        initiatorOpenUserId: number
        createDto: CreatePageContentDto
    }): Promise<PageContentDto> {
        
        const oldDto = await this.getPageContentService.getPageContentByPageAndKey({
            page: createDto.page,
            key: createDto.key,
            locale: createDto.locale,
        })
        
        if (!oldDto) {
            return this.createPageContentService.createPageContent({
                createDto,
                initiatorOpenUserId,
            })
        }
        
        return oldDto
    }
}
