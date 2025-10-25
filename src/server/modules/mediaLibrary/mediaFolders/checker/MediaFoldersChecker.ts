import { AppError, Injectable } from 'os-core-ts'
import { MediaFoldersRepository } from '@modules/mediaLibrary/mediaFolders/repository'

@Injectable()
export class MediaFoldersChecker {
    
    constructor(
        private readonly repository: MediaFoldersRepository,
    ) {
    }
    
    public async checkParentId(parentId: number): Promise<void> {
        if (parentId === 0) {
            return
        }
        const dto = await this.repository.findByPk(parentId)
        if (!dto) {
            throw new AppError('Not found parent id', {
                errorKey: 'NOT_FOUND_ERROR',
            })
        }
    }
    
    public async checkUniqFields({
                                     parentId,
                                     name,
                                 }: {
        parentId: number
        name: string
    }): Promise<void> {
        const dto = await this.repository.findOne({
            name,
            parent_id: parentId,
        })
        
        if (dto) {
            throw new AppError('Already exists', {
                errorKey: 'ALREADY_EXISTS_ERROR',
            })
        }
    }
}