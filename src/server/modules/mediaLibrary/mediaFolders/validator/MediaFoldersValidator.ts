import {
	ObjectSchemaValidator,
	PaginationQueryParams,
	PaginationQueryParamsValidator,
	SchemaValidator,
	Validator
} from 'os-core-ts'
import { CreateMediaFolderDto, MediaFolderDto, UpdateMediaFolderDto } from '@common/dto/mediaFolderDto'

export class MediaFoldersValidator {
	constructor() {
	}
	
	public getCreateMediaFolderDtoSchema(): ObjectSchemaValidator<CreateMediaFolderDto> {
		return Validator.object({
			name: Validator.string().min(3).max(255),
			parent_id: Validator.number().min(0)
		})
	}
	
	public getUpdateMediaFolderDtoSchema(): ObjectSchemaValidator<UpdateMediaFolderDto> {
		return this.getCreateMediaFolderDtoSchema().partial()
	}
	
	public getMediaFolderDtoSchema(): SchemaValidator<MediaFolderDto> {
		return this.getCreateMediaFolderDtoSchema().merge(
			Validator.object({
				date_add: Validator.date(),
				date_update: Validator.date(),
				id: Validator.number(),
				open_user_id: Validator.number()
			})
		)
	}
	
	public getMediaFolderDtoPaginationQueryParamsSchema(): SchemaValidator<
		PaginationQueryParams<MediaFolderDto>
	> {
		return PaginationQueryParamsValidator.getSchema(this.getMediaFolderDtoSchema())
	}
}
