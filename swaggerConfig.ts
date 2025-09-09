import { SwaggerConfig } from 'os-core-ts'

export default function buildSwaggerConfig(): SwaggerConfig {
    return {
        title: 'Gis landing page',
        description: '',
        hasAuth: true,
        appDir:'src/server'
    }
}
