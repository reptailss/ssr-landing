import { Controller, Get, Header, SwaggerInfo } from 'os-core-ts'
import { ClientSiteMapService } from '@modules/client/services/ClientSiteMapService'

@Controller()
export class ClientSiteMapController {
    
    constructor(private readonly siteMapService: ClientSiteMapService) {
    }
    
    @SwaggerInfo({
        disable: true,
    })
    @Header('content-type', 'application/xml')
    @Get('/sitemap.xml')
    public generateSiteMap(): string {
        return this.siteMapService.generateSiteMap()
    }
    
}