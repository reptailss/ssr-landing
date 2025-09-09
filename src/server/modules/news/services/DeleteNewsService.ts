import { ActionsLoggerService } from 'os-core-ts'
import { newsModel, NewsModel } from '@modules/news/model'

export class DeleteNewsService {
    constructor(
        private readonly model: NewsModel = newsModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async deleteMultilanguageNews({
                                             initiatorOpenUserId,
                                             slug,
                                         }: {
        initiatorOpenUserId: number
        slug: string
    }): Promise<number[]> {
        const oldDtoList = await this.model.findAll({
            filters: { slug },
        })
        if (!oldDtoList?.length) {
            return []
        }
        const ids: number[] = []
        
        for (const oldDto of oldDtoList) {
            await this.model.destroy({
                filters: { id: oldDto.id },
            })
            
            await this.actionsLoggerService.logDeleteAction({
                oldValue: oldDto,
                openUserId: initiatorOpenUserId,
                config: this.model.getConfig(),
                rowId: oldDto.id,
            })
            ids.push(oldDto.id)
        }
        
        
        return ids
    }
}
