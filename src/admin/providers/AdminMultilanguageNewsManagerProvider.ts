import {BaseCreateFieldsNewsDto, MultilanguageCreateFieldsNewsDto, NewsDto} from '@common/dto/newsDto'
import {AdminAuthRequest, IMultilanguagePostManagerProvider} from 'admin-panel-builder'
import {NEWS_ROUTE_PATHS} from '@common/apiRoutePaths/newsRoutePaths'
import {AdminServerApiUrlBuilder} from '@admin-helpers/AdminServerApiUrlBuilder'
import {MultilanguageNewsResponse, NewsListResponse} from '@common/apiResponses/newsResponses'
import {AppLocales} from '@common/locales'


export class AdminMultilanguageNewsManagerProvider implements IMultilanguagePostManagerProvider<
	NewsDto,
	BaseCreateFieldsNewsDto,
	MultilanguageCreateFieldsNewsDto,
	AppLocales
> {
	public async createPost({
								baseField,
								multilanguageField,
								token,
							}: {
		baseField: BaseCreateFieldsNewsDto
		multilanguageField: Record<AppLocales[number], MultilanguageCreateFieldsNewsDto>
		token: string | null
	}): Promise<void> {
		await AdminAuthRequest.post({
			url: AdminServerApiUrlBuilder.build(NEWS_ROUTE_PATHS.addMultilanguage),
			token: token || '',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				base_field:baseField,
				multilanguage_field: multilanguageField,
			}),
		})
	}
	
	public async updatePost({
								post,
								baseField,
								multilanguageField,
								token,
							}: {
		post: NewsDto,
		baseField: BaseCreateFieldsNewsDto
		multilanguageField: Record<AppLocales[number], MultilanguageCreateFieldsNewsDto>
		token: string | null
	}): Promise<void> {
		await AdminAuthRequest.put({
			url: AdminServerApiUrlBuilder.build(NEWS_ROUTE_PATHS.updateMultilanguage),
			token: token || '',
			headers: {
				'content-type': 'application/json',
			},
			pathParams: {
				slug: post.slug,
			},
			body: JSON.stringify({
				base_field:baseField,
				multilanguage_field: multilanguageField,
			}),
		})
	}
	
	public async deletePost({
								post,
								token,
							}: {
		post: NewsDto
		token: string | null
	}): Promise<void> {
		await AdminAuthRequest.delete({
			url: AdminServerApiUrlBuilder.build(NEWS_ROUTE_PATHS.deleteMultilanguage),
			token: token || '',
			pathParams: {
				slug: post.slug,
			},
		})
	}
	
	public async getFieldsFromPost({
									   token,
									   post,
								   }: {
		token: string | null
		post: NewsDto
	}): Promise<{
		baseField: BaseCreateFieldsNewsDto
		multilanguageField: Record<AppLocales[number], MultilanguageCreateFieldsNewsDto>
	}> {
		const res:MultilanguageNewsResponse = await AdminAuthRequest.get({
			url: AdminServerApiUrlBuilder.build(NEWS_ROUTE_PATHS.getMultilanguage),
			token: token || '',
			pathParams: {
				slug: post.slug,
			},
		})
		return {
			baseField: res.row.base_field,
			multilanguageField: res.row.multilanguage_field as Record<AppLocales[number], MultilanguageCreateFieldsNewsDto>
		}
	}
	
	public async getPosts({
							  token,
							  locale,
						  }: {
		locale: string | null
		token: string | null
	}): Promise<NewsDto[]> {
		const res: NewsListResponse = await AdminAuthRequest.get({
			url: AdminServerApiUrlBuilder.build(NEWS_ROUTE_PATHS.list),
			token: token || '',
			searchParams: {
				page: '1',
				per_page: '0',
				'where[locale]': locale || '',
			},
		})
		return res.rows
	}
	
}