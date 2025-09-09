import { GetUserService } from '@modules/users/services/GetUserService'
import { AppError } from 'os-core-ts'

export class UserAccessChecker {
    
    constructor(private readonly getUserService = new GetUserService()) {
    }
    
    public async checkOpenUserId(openUserId: number): Promise<void> {
        const userDto = await this.getUserService.getUserByOpenUserId(openUserId)
        if (!userDto) {
            throw new AppError('Not fount user', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
    }
}