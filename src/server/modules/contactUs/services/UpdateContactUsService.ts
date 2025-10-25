import { ActionsLoggerService, AppError, Injectable } from 'os-core-ts'
import { ContactUsDto, UpdateContactUsDto } from '@common/dto/contactUsDto'
import { ContactUsRepository } from '@modules/contactUs/repository'

@Injectable()
export class UpdateContactUsService {
    constructor(
        private readonly repository: ContactUsRepository,
        private readonly actionsLoggerService: ActionsLoggerService,
    ) {
    }
    
    public async updateContactUs({
                                     initiatorOpenUserId,
                                     updateDto,
                                     id,
                                 }: {
        initiatorOpenUserId: number
        updateDto: UpdateContactUsDto
        id: number
    }): Promise<ContactUsDto> {
        const oldDto = await this.repository.findByPk(id)
        if (!oldDto) {
            throw new AppError('Not found.', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        
        const newDto = await this.repository.update(updateDto, {
            id: id,
        })
        await this.actionsLoggerService.logUpdateAction({
            oldValue: oldDto,
            newValue: newDto,
            openUserId: initiatorOpenUserId,
            config: this.repository.getConfig(),
            rowId: id,
        })
        
        return newDto
    }
}
