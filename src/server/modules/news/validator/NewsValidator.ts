import {
    ObjectSchemaValidator,
    PaginationQueryParams,
    PaginationQueryParamsValidator,
    SchemaValidator,
    Validator,
} from 'os-core-ts'
import { AppLocale } from '@common/locales'
import { CreateMultilanguageNewsDto, CreateNewsDto, NewsDto, UpdateNewsDto } from '@common/dto/newsDto'

export class NewsValidator {
    constructor() {
    }
    
    public getCreateNewsDtoSchema(): ObjectSchemaValidator<CreateNewsDto> {
        return Validator.object({
            title: Validator.string().max(255),
            content: Validator.string(),
            locale: Validator.string().max(255) as SchemaValidator<AppLocale>,
            image: Validator.string().max(255),
        })
    }
    
    public getCreateMultilanguageNewsDtoSchema(): ObjectSchemaValidator<CreateMultilanguageNewsDto> {
        return Validator.object({
            base_field: Validator.object({
                image: Validator.string().max(255),
            }),
            multilanguage_field: Validator.object({
                uk: Validator.object({
                    title: Validator.string().max(255),
                    content: Validator.string(),
                }),
                en: Validator.object({
                    title: Validator.string().max(255),
                    content: Validator.string(),
                }),
            }),
        })
    }
    
    public getUpdateNewsDtoSchema(): ObjectSchemaValidator<UpdateNewsDto> {
        return this.getCreateNewsDtoSchema().partial()
    }
    
    public getNewsDtoSchema(): SchemaValidator<NewsDto> {
        return this.getCreateNewsDtoSchema().merge(
            Validator.object({
                date_add: Validator.date(),
                date_update: Validator.date(),
                id: Validator.number(),
                slug: Validator.string(),
            }),
        )
    }
    
    public getNewsDtoPaginationQueryParamsSchema(): SchemaValidator<
        PaginationQueryParams<NewsDto>
    > {
        return PaginationQueryParamsValidator.getSchema(this.getNewsDtoSchema())
    }
}
