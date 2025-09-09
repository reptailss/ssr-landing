import { GmConfig, GmNoSqlModelConfig, GmSqlModelConfig } from 'os-core-ts'


const sqlByDynamicDomain: GmSqlModelConfig = {
    dbType: 'sql',
    type: 'dynamicByDomain',
    columns: { name: { type: 'STRING' }, age: { type: 'INTEGER' } },
}

const sqlByLeId: GmSqlModelConfig = {
    dbType: 'sql',
    type: 'dynamicDbConfigByLegalEntityId',
    columns: {
        locale: { type: 'STRING' },
        value: { type: 'INTEGER' },
        legal_entity_id: { type: 'INTEGER' },
    },
}

const noSqlByYearAndMonth: GmNoSqlModelConfig = {
    dbType: 'noSql',
    type: 'byDatabaseNameAndYearMonth',
    columns: { name: { type: 'STRING' }, price: { type: 'INTEGER' } },
}

const sqlByStaticDb: GmSqlModelConfig = {
    dbType: 'sql',
    type: 'staticByDbConnection',
    columns: {
        email: { type: 'STRING' },
        text: { type: 'STRING' },
        form_name: { type: 'STRING' },
        status: { type: 'STRING' },
  
    },
}


export default function buildGmConfig(): GmConfig {
    return {
        dtoName: {
            singular: 'ContactUs',
            plural: 'ContactUs',
        },
        moduleName: 'ContactUs',
        model: sqlByStaticDb,
        hasSeparated: true,
        endpoints: {
            add: { hasActionLogger: true, hasAuth: true, hasStructureAccess: false },
            update: { hasActionLogger: true, hasAuth: true, hasStructureAccess: false },
            delete: { hasActionLogger: true, hasAuth: true, hasStructureAccess: false },
            get: { hasAuth: false, hasStructureAccess: false },
            list: { hasAuth: false, hasStructureAccess: false },
        },
        rootDir: 'src/server',
    }
}
