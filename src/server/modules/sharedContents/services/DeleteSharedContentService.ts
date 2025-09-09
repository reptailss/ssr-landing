import { ActionsLoggerService, AppError } from 'os-core-ts'
import { sharedContentsModel, SharedContentsModel } from '@modules/sharedContents/model'
import { SharedContentDto } from '@common/dto/sharedContentDto'
import { AppLocale } from '@common/locales'

export class DeleteSharedContentService {
    constructor(
        private readonly model: SharedContentsModel = sharedContentsModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {
    }
    
    public async deleteSharedContentByKey({
                                              initiatorOpenUserId,
                                              key,
                                              locale,
                                          }: {
        initiatorOpenUserId: number
        key: string
        locale?: AppLocale
    }): Promise<SharedContentDto> {
        const oldDto = await this.model.findOne({
            filters: {
                key,
                ...(locale ? { locale } : {}),
            },
        })
        if (!oldDto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        await this.model.destroy({
            filters: { id: oldDto.id },
        })
        
        await this.actionsLoggerService.logDeleteAction({
            oldValue: oldDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: oldDto.id,
        })
        
        return oldDto
    }
}
