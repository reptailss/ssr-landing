export type ClientPageData<
    PageContent extends Record<string, unknown>,
    Data = null
> = {
    pageContent: Partial<PageContent>
    data: Data
}
