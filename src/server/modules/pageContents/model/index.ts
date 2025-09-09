import { IModelSql, LoaderModelSql } from 'os-core-ts'
import { dbConnectionStaticSql } from '@db/dbConnection'
import { PAGE_CONTENTS_COLUMNS } from '@modules/pageContents/model/columns'
import { PageContentDto } from '@common/dto/pageContentDto'
import { PAGE_CONTENTS_TABLE_NAME } from '@modules/pageContents/model/constants'


export type PageContentsModel = IModelSql<PageContentDto>

export const pageContentsModel: PageContentsModel = LoaderModelSql.staticByDbConnection({
    columns: PAGE_CONTENTS_COLUMNS,
    tableName: PAGE_CONTENTS_TABLE_NAME,
    dbConnection: dbConnectionStaticSql,
})
