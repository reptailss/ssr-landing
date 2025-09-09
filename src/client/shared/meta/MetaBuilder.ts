import { MetaDescriptor } from 'os-react-ssr-client'

export class MetaBuilder {
    static buildMetaDescriptions({
                                     title,
                                     description,
                                     image,
                                     appPublicDomain,
                                 }: {
        title: string
        description: string
        appPublicDomain: string
        image?: string
    }): MetaDescriptor[] {
        return [
            {
                title,
            },
            {
                property: 'og:type',
                content: 'website',
            },
            {
                name: 'og:title',
                property: 'og:title',
                key: 'title',
                content: title,
            },
            {
                name: 'description',
                content: description,
            },
            {
                name: 'og:description',
                property: 'og:description',
                key: 'description',
                content: description,
            },
            {
                name: 'twitter:title',
                content: title,
            },
            {
                name: 'twitter:description',
                content: description,
            },
            {
                property: 'twitter:image',
                content: image || `${appPublicDomain}/images/gis-logo.png`,
            },
            {
                property: 'og:url',
                content: appPublicDomain,
            },
            {
                property: 'og:image',
                content: image || `${appPublicDomain}/images/gis-logo.png`,
            },
            
            {
                property: 'og:image:alt',
                content: image || 'gis-logo',
            },
        ]
    }
}