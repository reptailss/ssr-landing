import React from 'react'
import { LinkDescriptor, Links, Meta, Outlet, RouterProgress, Scripts } from 'os-react-ssr-client'
import { cssLink } from 'os-react-ssr-css'
import { OverlaySpinner } from '@client-ui/spinners/overlay'
import baseCss from '@client-shared/css/base.css'
import { ClientApp } from '@client-app/ClientApp'

export function links(): LinkDescriptor[] {
    return [
        
        {
            rel: 'stylesheet',
            href: baseCss,
        },
        cssLink,
    ]
}

export default function Document() {
    
    return (
        <html lang="uk">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/png" href="/images/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <Meta />
            
            <Links />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet" />
        </head>
        <body>
        
        <RouterProgress>
            <OverlaySpinner />
        </RouterProgress>
        
        <ClientApp>
            <Outlet />
        </ClientApp>
       
        
        <Scripts />
        </body>
        </html>
    )
}