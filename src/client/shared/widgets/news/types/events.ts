import { NewsDto } from '@common/dto/newsDto'

export type OnClickNewsSearchCard = (newsDto: NewsDto) => void
export type OnClickNewsCard = (newsDto: NewsDto) => void
