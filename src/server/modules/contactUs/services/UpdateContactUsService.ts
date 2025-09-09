import { ActionsLoggerService, AppError } from 'os-core-ts'
import { contactUsModel, ContactUsModel } from '@modules/contactUs/model'
import { ContactUsDto, UpdateContactUsDto } from '@common/dto/contactUsDto'

export class UpdateContactUsService {
    constructor(
        private readonly model: ContactUsModel = contactUsModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
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
        const oldDto = await this.model.findByPk(id)
        if (!oldDto) {
            throw new AppError('Not found.', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        
        const newDto = await this.model.update(updateDto, {
            filters: { id: id },
            returning: true,
        })
        await this.actionsLoggerService.logUpdateAction({
            oldValue: oldDto,
            newValue: newDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: id,
        })
        
        return newDto
    }
}
