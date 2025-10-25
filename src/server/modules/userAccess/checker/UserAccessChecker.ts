import { GetUserService } from '@modules/users/services/GetUserService'
import { AppError, Injectable } from 'os-core-ts'

@Injectable()
export class UserAccessChecker {
    
    constructor(private readonly getUserService: GetUserService) {
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