import { AdminPanelBuilderConfig } from 'admin-panel-builder'
import path from 'path'

export default function(): AdminPanelBuilderConfig {
    return {
        mainFilePath: 'src/admin/index.ts',
        buildDirectory: 'admin-public/fq1f3x',
        publicPath: `/fq1f3x`,
        hmrServerPort: 3000,
        alias: {
            '@admin-fields':path.resolve('src','admin','fields'),
            '@admin-content':path.resolve('src','admin','content'),
            '@admin-providers':path.resolve('src','admin','providers'),
            '@admin-managers':path.resolve('src','admin','managers'),
            '@admin-helpers':path.resolve('src','admin','helpers'),
            '@admin-widgets':path.resolve('src','admin','widgets'),
            '@common':path.resolve('src','common'),
        },
        faviconPathFile: 'src/admin/public/favicon.ico',
        htmlTemplatePathFile: 'src/admin/public/index.html',
        
    }
}