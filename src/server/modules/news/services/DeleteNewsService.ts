import { ActionsLoggerService, Injectable } from 'os-core-ts'
import { NewsRepository } from '@modules/news/repository'

@Injectable()
export class DeleteNewsService {
    constructor(
        private readonly repository: NewsRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    public async deleteMultilanguageNews({
                                             initiatorOpenUserId,
                                             slug,
                                         }: {
        initiatorOpenUserId: number
        slug: string
    }): Promise<number[]> {
        const oldDtoList = await this.repository.findAll({
            where: {
                slug,
            },
        })
        if (!oldDtoList?.length) {
            return []
        }
        const ids: number[] = []
        
        for (const oldDto of oldDtoList) {
            await this.repository.destroy({
                id: oldDto.id,
            })
            
            await this.actionsLoggerService.logDeleteAction({
                oldValue: oldDto,
                openUserId: initiatorOpenUserId,
                config: this.repository.getConfig(),
                rowId: oldDto.id,
            })
            ids.push(oldDto.id)
        }
        
        
        return ids
    }
}
