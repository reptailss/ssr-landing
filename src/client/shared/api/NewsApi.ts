import { NewsDto } from '@common/dto/newsDto'

export class NewsApi {
    static async searchNews(searchValue: string, limit: number): Promise<NewsDto[]> {
        
        const params = new URLSearchParams({
            page: '1',
            per_page: String(limit),
        })
        params.append('where[title LIKE]', `%${searchValue}%`)
        
        const response = await fetch(`/api/news/list?${params.toString()}`, {
            method: 'GET',
        })
        
        if (!response.ok) {
            const errors = await response.json()
            throw new Error(errors)
        }
        
        const res: {
            rows: NewsDto[]
        } = await response.json()
        
        return res.rows
    }
}