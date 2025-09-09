import { IModelSql, LoaderModelSql } from 'os-core-ts';
import { dbConnectionStaticSql } from '@db/dbConnection';
import { SHARED_CONTENTS_COLUMNS } from '@modules/sharedContents/model/columns';
import { SharedContentDto } from '@common/dto/sharedContentDto';
import { SHARED_CONTENTS_TABLE_NAME } from '@modules/sharedContents/model/constants';


export type SharedContentsModel = IModelSql<SharedContentDto>


export const sharedContentsModel: SharedContentsModel = LoaderModelSql.staticByDbConnection({
    columns: SHARED_CONTENTS_COLUMNS,
    tableName: SHARED_CONTENTS_TABLE_NAME,
    dbConnection: dbConnectionStaticSql,
})
