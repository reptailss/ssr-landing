import { ClientPackagesHtmlBuilder, Controller, Get, SendFileByPath, SwaggerInfo } from 'os-core-ts'
import fs from 'fs/promises'
import path from 'path'

import { ADMIN_CLIENT_ROUTE_PATHS } from '@modules/adminClient/constants/routePaths'

@Controller()
export class AdminClientController {
    @SwaggerInfo({
        disable: true,
    })
    @SendFileByPath(ADMIN_CLIENT_ROUTE_PATHS.bundleJs)
    public getClientBundle(): string {
        return this.getFilePath('index.js')
    }
    @SwaggerInfo({
        disable: true,
    })
    @SendFileByPath(ADMIN_CLIENT_ROUTE_PATHS.favicon)
    public getClientFavicon(): string {
        return this.getFilePath('favicon.ico')
    }
    
    @SwaggerInfo({
        disable: true,
    })
    @Get(ADMIN_CLIENT_ROUTE_PATHS.index)
    public async getHtml() {
        const html = await fs.readFile(
            this.getFilePath('index.html'), {
                encoding: 'utf-8',
            })
        const clientPackagesHtmlBuilder = new ClientPackagesHtmlBuilder({
            html,
            packageName: 'fq1f3x',
        })
        return clientPackagesHtmlBuilder
            .addServicePrefixToScriptsBundle()
            .addServicePrefixToWindow()
            .addServiceNameToTitle()
            .getHtml()
    }
    
    private getFilePath(fileName: string): string {
        return path.resolve(process.cwd(), 'admin-public', 'fq1f3x', fileName)
        
    }
}