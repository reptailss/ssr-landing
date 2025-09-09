import {ActionsLoggerService, AppError} from 'os-core-ts'
import {contactUsModel, ContactUsModel} from '@modules/contactUs/model'
import {ContactUsDto} from '@common/dto/contactUsDto'

export class DeleteContactUsService {
    constructor(
        private readonly model: ContactUsModel = contactUsModel,
        private readonly actionsLoggerService: ActionsLoggerService = new ActionsLoggerService(),
    ) {}

    public async deleteContactUsById({
        initiatorOpenUserId,
        id,
    }: {
        initiatorOpenUserId: number
        id: number
    }): Promise<ContactUsDto> {
        const oldDto = await this.model.findOne({
            filters: {id: id},
        })
        if (!oldDto) {
            throw new AppError('Not found', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
        await this.model.destroy({
            filters: {id: id},
        })

        await this.actionsLoggerService.logDeleteAction({
            oldValue: oldDto,
            openUserId: initiatorOpenUserId,
            config: this.model.getConfig(),
            rowId: id,
        })

        return oldDto
    }
}
