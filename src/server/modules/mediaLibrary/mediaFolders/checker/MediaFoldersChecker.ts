import { AppError } from 'os-core-ts'
import { mediaFoldersModel, MediaFoldersModel } from '@modules/mediaLibrary/mediaFolders/model'

export class MediaFoldersChecker {
	
	constructor(
		private readonly model: MediaFoldersModel = mediaFoldersModel,
	) {
	}
	
	public async checkParentId(parentId: number): Promise<void> {
		if (parentId === 0) {
			return
		}
		const dto = await this.model.findByPk(parentId)
		if (!dto) {
			throw new AppError('Not found parent id', {
				errorKey: 'NOT_FOUND_ERROR'
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
		const dto = await this.model.findOne({
			filters: {
				name,
				parent_id: parentId
			}
		})
		if (dto) {
			throw new AppError('Already exists', {
				errorKey: 'ALREADY_EXISTS_ERROR'
			})
		}
	}
}