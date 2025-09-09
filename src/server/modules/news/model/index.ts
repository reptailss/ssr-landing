import { IModelSql, LoaderModelSql } from 'os-core-ts';
import { dbConnectionStaticSql } from '@db/dbConnection';
import { NEWS_COLUMNS } from '@modules/news/model/columns';
import { NEWS_TABLE_NAME } from '@modules/news/model/constants';
import { NewsDto } from '@common/dto/newsDto';


export type NewsModel = IModelSql<NewsDto>


export const newsModel: NewsModel = LoaderModelSql.staticByDbConnection({
    columns: NEWS_COLUMNS,
    tableName: NEWS_TABLE_NAME,
    dbConnection: dbConnectionStaticSql,
})
