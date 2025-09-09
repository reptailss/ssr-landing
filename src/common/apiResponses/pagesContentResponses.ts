import { PageContentDto } from '@common/dto/pageContentDto'

export type PagesContentResponse<Value = object> = {
    row: PageContentDto<Value>
    error: false
    errors: []
}