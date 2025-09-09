import { ContentManagerField, MultilineField, ObjectField, StringField } from 'admin-panel-builder'
import { ProductsPageContent } from '@common/pagesContent/products'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AdminMediaField } from '@admin-fields/AdminMediaField'

export const adminProductsPageContent = new ContentManagerField<ProductsPageContent>(
    CLIENT_ROUTE_PATHS.products,
    new ObjectField({
        seo: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
        }).setName('СЕО').setIcon('hugeicons:seo'),
        productsWidget: new ObjectField({
            gpsMonitoringAndDispatching: new ObjectField({
                title: new StringField().setName('Заголовок'),
                description: new MultilineField().setName('Опис'),
                desktopImage: new AdminMediaField().setName('Зображення для десктопу').setMediaType('image'),
                mobileImage: new AdminMediaField().setName('Зображення для моб.версії').setMediaType('image'),
            }).setName('GPS-моніторинг').setHasShowInPopover().setIcon('tabler:gps-filled'),
            eTicket: new ObjectField({
                description: new MultilineField().setName('Опис'),
                desktopImage: new AdminMediaField().setName('Зображення для десктопу').setMediaType('image'),
                mobileImage: new AdminMediaField().setName('Зображення для моб.версії').setMediaType('image'),
            }).setName('E- Ticket').setHasShowInPopover().setIcon('fontisto:train-ticket'),
            smartSociety: new ObjectField({
                description: new MultilineField().setName('Опис'),
                desktopImage: new AdminMediaField().setName('Зображення для десктопу').setMediaType('image'),
                mobileImage: new AdminMediaField().setName('Зображення для моб.версії').setMediaType('image'),
            }).setName('Smart Society').setHasShowInPopover().setIcon('maki:city'),
            otherSolutions: new ObjectField({
                description: new MultilineField().setName('Опис'),
                desktopImage: new AdminMediaField().setName('Зображення для десктопу').setMediaType('image'),
                mobileImage: new AdminMediaField().setName('Зображення для моб.версії').setMediaType('image'),
            }).setName('Інші рішення').setHasShowInPopover().setIcon('pajamas:issue-type-feature'),
        }).setName('Основні продукти').setIcon('streamline-flex:production-belt-time'),
    }),
).setName('Основні рішення').setIcon('icon-park-outline:ad-product')