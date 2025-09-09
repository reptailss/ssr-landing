import { NewsDto } from '@common/dto/newsDto'

export type NewsCardLinkHrefBuildFn = (newsDto: NewsDto) => string