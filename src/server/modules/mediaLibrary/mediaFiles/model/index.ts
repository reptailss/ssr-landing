import { IModelSql, LoaderModelSql } from 'os-core-ts'
import { MEDIA_FILES_COLUMNS } from '@modules/mediaLibrary/mediaFiles/model/columns'
import { MediaFileDto } from '@modules/mediaLibrary/mediaFiles/dto'
import { MEDIA_FILES_TABLE_NAME } from '@modules/mediaLibrary/mediaFiles/model/constants'
import { dbConnectionStaticSql } from '@db/dbConnection'


export type MediaFilesModel = IModelSql<MediaFileDto>

export const mediaFilesModel: MediaFilesModel = LoaderModelSql.staticByDbConnection({
    columns: MEDIA_FILES_COLUMNS,
    tableName: MEDIA_FILES_TABLE_NAME,
    dbConnection: dbConnectionStaticSql,
})
