import { HomePageContent } from '@common/pagesContent/home'
import { ArrayField, ContentManagerField, MultilineField, ObjectField, StringField } from 'admin-panel-builder'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { AdminMediaField } from '@admin-fields/AdminMediaField'


export const adminHomePageContent = new ContentManagerField<HomePageContent>(
    CLIENT_ROUTE_PATHS.home,
    new ObjectField({
        seo: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
        }).setName('СЕО').setIcon('hugeicons:seo'),
        heroWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            subtitle: new StringField().setName('Підзаголовок'),
            description: new MultilineField().setName('Опис'),
        }).setName('HERO блок').setIcon('arcticons:score-hero'),
        productsWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new MultilineField().setName('Опис'),
            gpsMonitoringAndDispatching: new ObjectField({
                title: new StringField().setName('Заголовок'),
                description: new MultilineField().setName('Опис'),
                desktopImage: new AdminMediaField().setName('Зображення для десктопу').setMediaType('image'),
                mobileImage: new AdminMediaField().setName('Зображення для моб.версії').setMediaType('image'),
            }).setName('GPS-моніторинг').setHasShowInPopover().setIcon('tabler:gps-filled'),
            eTicket: new ObjectField({
                title: new StringField().setName('Заголовок'),
                description: new MultilineField().setName('Опис'),
                desktopImage: new AdminMediaField().setName('Зображення для десктопу').setMediaType('image'),
                mobileImage: new AdminMediaField().setName('Зображення для моб.версії').setMediaType('image'),
            }).setName('E- Ticket').setHasShowInPopover().setIcon('fontisto:train-ticket'),
            smartSociety: new ObjectField({
                title: new StringField().setName('Заголовок'),
                description: new MultilineField().setName('Опис'),
                desktopImage: new AdminMediaField().setName('Зображення для десктопу').setMediaType('image'),
                mobileImage: new AdminMediaField().setName('Зображення для моб.версії').setMediaType('image'),
            }).setName('Smart Society').setHasShowInPopover().setIcon('maki:city'),
        }).setName('Основні продукти').setIcon('streamline-flex:production-belt-time'),
        smartSocietyWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            subtitle: new StringField().setName('Підзаголовок'),
            video: new AdminMediaField().setName('Відео').setMediaType('video'),
            videoPreview: new AdminMediaField().setName('Preview для відео').setMediaType('image'),
            description: new MultilineField().setName('Опис'),
            cards: new ArrayField(new ObjectField({
                title: new StringField().setName('Заголовок'),
                subtitle: new StringField().setName('Підзаголовок'),
                image: new AdminMediaField().setName('Зображення').setMediaType('image'),
            })).setName('Слайди').setHasShowInPopover().setIcon('ri:slideshow-2-fill'),
        }).setName('Smart Society').setIcon('maki:city'),
        feedbackWidget: new ObjectField({
            title: new StringField().setName('Заголовок'),
            description: new StringField().setName('Підзаголовок'),
            imageDesktop: new AdminMediaField().setName('Зображення для десктопу').setMediaType('image'),
            imageMobile: new AdminMediaField().setName('Зображення для моб.версії').setMediaType('image'),
        }).setName('Зворотній зв’язок').setIcon('lucide-contact-round'),
    }),
).setName('Головна').setIcon('ic:outline-home')

