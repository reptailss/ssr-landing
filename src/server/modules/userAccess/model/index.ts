import { IModelSql, LoaderModelSql } from 'os-core-ts';
import { dbConnectionStaticSql } from '@db/dbConnection';
import { USER_ACCESS_COLUMNS } from '@modules/userAccess/model/columns';
import { UserAccessDto } from '@common/dto/userAccessDto';
import { USER_ACCESS_TABLE_NAME } from '@modules/userAccess/model/constants';


export type UserAccessModel = IModelSql<UserAccessDto>


export const userAccessModel: UserAccessModel = LoaderModelSql.staticByDbConnection({
    columns: USER_ACCESS_COLUMNS,
    tableName: USER_ACCESS_TABLE_NAME,
    dbConnection: dbConnectionStaticSql,
})
