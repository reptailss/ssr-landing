import { IModelSql, LoaderModelSql } from 'os-core-ts'
import { MEDIA_FOLDERS_COLUMNS } from '@modules/mediaLibrary/mediaFolders/model/columns'
import { MEDIA_FOLDERS_TABLE_NAME } from '@modules/mediaLibrary/mediaFolders/model/constants'
import { dbConnectionStaticSql } from '@db/dbConnection'
import { MediaFolderDto } from '@common/dto/mediaFolderDto'


export type MediaFoldersModel = IModelSql<MediaFolderDto>

export const mediaFoldersModel: MediaFoldersModel = LoaderModelSql.staticByDbConnection({
    columns: MEDIA_FOLDERS_COLUMNS,
    tableName: MEDIA_FOLDERS_TABLE_NAME,
    dbConnection: dbConnectionStaticSql,
})

