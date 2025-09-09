import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { APP_SERVER_CONFIG } from '@config'

const PRIORITIES: Record<string, string> = {
    [CLIENT_ROUTE_PATHS.home]: '1.0',
    [CLIENT_ROUTE_PATHS.products]: '0.9',
    [CLIENT_ROUTE_PATHS.gpsMonitoringAndDispatching]: '0.8',
    [CLIENT_ROUTE_PATHS.eTicket]: '0.8',
    [CLIENT_ROUTE_PATHS.smartSociety]: '0.8',
    [CLIENT_ROUTE_PATHS.about]: '0.5',
    [CLIENT_ROUTE_PATHS.news]: '0.7',
    [CLIENT_ROUTE_PATHS.termsOfUse]: '0.3',
    [CLIENT_ROUTE_PATHS.privacyPolicy]: '0.3',
    [CLIENT_ROUTE_PATHS.contacts]: '0.6',
}

const CHANGEFREQ = 'monthly'

export class ClientSiteMapService {
    public generateSiteMap(): string {
        
        const staticPaths = Object.values(CLIENT_ROUTE_PATHS)
            .filter(path => !path.includes(':'))
        
        return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPaths.map(path => `
  <url>
    <loc>${APP_SERVER_CONFIG.appPublicDomain}${path}</loc>
    <changefreq>${CHANGEFREQ}</changefreq>
    <priority>${PRIORITIES[path] ?? '0.5'}</priority>
  </url>`).join('')}
</urlset>`
    }
}
