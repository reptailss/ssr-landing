import { IModelSql, LoaderModelSql } from 'os-core-ts';
import { dbConnectionStaticSql } from '@db/dbConnection';
import { CONTACT_US_COLUMNS } from '@modules/contactUs/model/columns';
import { ContactUsDto } from '@common/dto/contactUsDto';
import { CONTACT_US_TABLE_NAME } from '@modules/contactUs/model/constants';


export type ContactUsModel = IModelSql<ContactUsDto>


export const contactUsModel: ContactUsModel = LoaderModelSql.staticByDbConnection({
    columns: CONTACT_US_COLUMNS,
    tableName: CONTACT_US_TABLE_NAME,
    dbConnection: dbConnectionStaticSql,
})
