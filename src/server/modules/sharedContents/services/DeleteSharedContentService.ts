import { ActionsLoggerService, AppError, Injectable } from 'os-core-ts'
import { SharedContentDto } from '@common/dto/sharedContentDto'
import { AppLocaleValue } from '@common/locales'
import { SharedContentsRepository } from '@modules/sharedContents/repository'

@Injectable()
export class DeleteSharedContentService {
    constructor(
        private readonly repository: SharedContentsRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    public async deleteSharedContentByKey({
                                              initiatorOpenUserId,
                                              key,
                                              locale,
                                          }: {
        initiatorOpenUserId: number
        key: string
        locale?: AppLocaleValue
    }): Promise<SharedContentDto> {
        const oldDto = await this.repository.findOne({
            key,
            ...(locale ? { locale } : {}),
        })
        if (!oldDto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        await this.repository.destroy({
            id: oldDto.id
        })
        
        await this.actionsLoggerService.logDeleteAction({
            oldValue: oldDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: oldDto.id,
        })
        
        return oldDto
    }
}
