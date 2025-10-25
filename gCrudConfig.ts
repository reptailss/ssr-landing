import {
    GmCrudConfig,
    GmCrudSqlRepositoryConfig,
    GmCrudNoSqlRepositoryConfig,
    GmCrudEndpointsConfig,
} from 'os-core-ts'

const sqlByStaticDb: GmCrudSqlRepositoryConfig = {
    dbType: 'sql',
    type: 'staticByDbConnection',
    columns: {title: {type: 'STRING'}, description: {type: 'STRING'}},
}

const sqlByDynamicDomain: GmCrudSqlRepositoryConfig = {
    dbType: 'sql',
    type: 'dynamicByDomain',
    columns: {name: {type: 'STRING'}, age: {type: 'INTEGER'}},
}

const sqlByLeId: GmCrudSqlRepositoryConfig = {
    dbType: 'sql',
    type: 'dynamicDbConfigByLegalEntityId',
    columns: {title: {type: 'STRING'}, user_id: {type: 'INTEGER'}},
}

const noSqlByYearAndMonth: GmCrudNoSqlRepositoryConfig = {
    dbType: 'noSql',
    type: 'byDatabaseNameAndYearMonth',
    columns: {name: {type: 'STRING'}, price: {type: 'INTEGER'}},
}

export default function buildGmCrudConfig(): GmCrudConfig {
    return {
        dtoName: {
            singular: 'Test',
            plural: 'Test',
        },
        moduleName: 'Test',
        repository: sqlByStaticDb,
        hasSeparated: true,
        endpoints: {
            add: {hasActionLogger: true, hasAuth: true, hasStructureAccess: false},
            update: {hasActionLogger: true, hasAuth: true, hasStructureAccess: false},
            delete: {hasActionLogger: true, hasAuth: true, hasStructureAccess: false},
            get: {hasAuth: false, hasStructureAccess: false},
            list: {hasAuth: false, hasStructureAccess: false},
        },
        rootDir: 'src',
    }
}
