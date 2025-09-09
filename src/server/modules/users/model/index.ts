import { IModelSql, LoaderModelSql } from 'os-core-ts';
import { dbConnectionStaticSql } from '@db/dbConnection';
import { USERS_COLUMNS } from '@modules/users/model/columns';
import { UserDto } from '@common/dto/userDto';
import { USERS_TABLE_NAME } from '@modules/users/model/constants';


export type UsersModel = IModelSql<UserDto>


export const usersModel: UsersModel = LoaderModelSql.staticByDbConnection({
    columns: USERS_COLUMNS,
    tableName: USERS_TABLE_NAME,
    dbConnection: dbConnectionStaticSql,
})
