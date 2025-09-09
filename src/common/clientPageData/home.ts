import { HomePageContent } from '@common/pagesContent/home'
import { NewsDto } from '@common/dto/newsDto'
import { ClientPageData } from '@common/clientPageData/clientPageData'

export type HomeClientPageData = ClientPageData<HomePageContent, {
    lastNewsList: NewsDto[]
}>