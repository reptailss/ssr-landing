import {
	ObjectSchemaValidator,
	PaginationQueryParams,
	PaginationQueryParamsValidator,
	SchemaValidator,
	Validator
} from 'os-core-ts'
import { CreateMediaFileDto, MediaFileDto, UpdateMediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'

export class MediaFilesValidator {
	constructor() {
	}
	
	public getCreateMediaFileDtoSchema(): ObjectSchemaValidator<CreateMediaFileDto> {
		return Validator.object({
			name: Validator.string().min(3).max(255),
			folder_id: Validator.number()
		})
	}
	
	public getUpdateMediaFileDtoSchema(): ObjectSchemaValidator<UpdateMediaFileDto> {
		return this.getCreateMediaFileDtoSchema().partial()
	}
	
	public getMediaFileDtoSchema(): SchemaValidator<MediaFileDto> {
		return this.getCreateMediaFileDtoSchema().merge(
			Validator.object({
				date_add: Validator.date(),
				date_update: Validator.date(),
				id: Validator.number(),
				open_user_id: Validator.number(),
				file: Validator.string().max(255),
				mimetype: Validator.string().max(255),
			})
		)
	}
	
	public getMediaFileDtoPaginationQueryParamsSchema(): SchemaValidator<
		PaginationQueryParams<MediaFileDto>
	> {
		return PaginationQueryParamsValidator.getSchema(this.getMediaFileDtoSchema())
	}
}
