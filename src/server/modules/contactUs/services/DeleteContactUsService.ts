import { ActionsLoggerService, AppError, Injectable } from 'os-core-ts'
import { ContactUsDto } from '@common/dto/contactUsDto'
import { ContactUsRepository } from '@modules/contactUs/repository'

@Injectable()
export class DeleteContactUsService {
    constructor(
        private readonly repository: ContactUsRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    public async deleteContactUsById({
                                         initiatorOpenUserId,
                                         id,
                                     }: {
        initiatorOpenUserId: number
        id: number
    }): Promise<ContactUsDto> {
        const oldDto = await this.repository.findOne({
            id: id,
        })
        if (!oldDto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        await this.repository.destroy({
            id: id,
        })
        
        await this.actionsLoggerService.logDeleteAction({
            oldValue: oldDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: id,
        })
        
        return oldDto
    }
}
