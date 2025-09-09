import { NewsDto } from '@common/dto/newsDto'
import { ClientPageData } from '@common/clientPageData/clientPageData'
import { NewsPageContent, NewsPostPageContent } from '@common/pagesContent/news'
import { NewsListResponse } from '@common/apiResponses/newsResponses'

export type NewsClientPageData = ClientPageData<NewsPageContent, {
    news: NewsListResponse
}>

export type NewsPostClientPageData = ClientPageData<NewsPostPageContent, {
    news: NewsListResponse
    targetNews: NewsDto | null
}>