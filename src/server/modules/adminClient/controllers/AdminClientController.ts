import { ClientPackagesHtmlBuilder, ControllerDec, GetDec, SendFileByPathDec, SwaggerInfoDec } from 'os-core-ts'
import fs from 'fs/promises'
import path from 'path'

import { ADMIN_CLIENT_ROUTE_PATHS } from '@modules/adminClient/constants/routePaths'

@ControllerDec()
export class AdminClientController {
    @SwaggerInfoDec({
        disable: true,
    })
    @SendFileByPathDec(ADMIN_CLIENT_ROUTE_PATHS.bundleJs)
    public getClientBundle(): string {
        return this.getFilePath('index.js')
    }
    @SwaggerInfoDec({
        disable: true,
    })
    @SendFileByPathDec(ADMIN_CLIENT_ROUTE_PATHS.favicon)
    public getClientFavicon(): string {
        return this.getFilePath('favicon.ico')
    }
    
    @SwaggerInfoDec({
        disable: true,
    })
    @GetDec(ADMIN_CLIENT_ROUTE_PATHS.index)
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