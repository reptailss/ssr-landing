import { ControllerDec, GetDec, SetHeaderDec, SwaggerInfoDec } from 'os-core-ts'
import { ClientSiteMapService } from '@modules/client/services/ClientSiteMapService'

@ControllerDec()
export class ClientSiteMapController {
    
    constructor(private readonly siteMapService: ClientSiteMapService = new ClientSiteMapService()) {
    }
    
    @SwaggerInfoDec({
        disable: true,
    })
    @SetHeaderDec('content-type', 'application/xml')
    @GetDec('/sitemap.xml')
    public generateSiteMap(): string {
        return this.siteMapService.generateSiteMap()
    }
    
}