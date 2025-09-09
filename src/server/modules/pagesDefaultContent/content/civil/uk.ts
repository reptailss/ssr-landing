import { CivilPageContent } from '@common/pagesContent/civil'
import smartSociety from '../smartSociety/uk'

export default {
    seo: {
        title: 'GIS - CIVIL',
        description: 'Мобільний застосунок мешканця міста - CIVIL',
    },
    heroWidget: {
        title: 'Мобільний застосунок мешканця міста - CIVIL',
        description: '<h2>Civil — інноваційний цифровий інструмент для мешканців</h2><p>Створений у межах впровадження системи електронного квитка та концепції «розумного міста» за принципом «усі сервіси в одному додатку».</p><p>Завдяки Civil ужгородці отримують зручний доступ до широкого спектра міських послуг.</p><h3>Можливості, доступні вже сьогодні:</h3><ul><li>оплата проїзду у громадському транспорті міста;</li><li>верифікація наданих пільг через сервіс ДІЯ;</li><li>перегляд графіків руху транспорту та відстеження його у режимі реального часу;</li><li>актуальні міські новини та оголошення;</li><li>зручний зв\'язок із місцевою владою.</li></ul><h3>Найближчі оновлення:</h3><p>Планується розширення переліку доступних для оплати сервісів, зокрема:</p><ul><li>оплата за паркування;</li><li>комунальні послуги;</li><li>інші міські сервіси.</li></ul><p><p></p><a href="https://info.ua-gis.com/tutorial" target="_blank">Посібник користувача</a></p>',
        video: '',
        videoPreview: '/images/home-smart-society-video-preview.jpg',
    },
    trekWidget: {
        title: 'СХЕМА взаємодії компонентів системи CIVIL',
        levels: [
            {
                title: 'Рівень 5',
                items: [
                    {
                        icon: '/images/icon-municipality-small.png',
                        label: 'Центральна система муніципалітету',
                    },
                    {
                        icon: '/images/icon-operator-small.png',
                        label: 'Центральна система оператора',
                    },
                    {
                        icon: '/images/icon-transport-small.png',
                        label: 'Центральна система транспортної компанії',
                    },
                ],
            },
            {
                title: 'Рівень 4',
                items: [
                    {
                        icon: '/images/icon-server-small.png',
                        label: 'Хмарний сервер (eCivM solution)',
                    },
                ],
            },
            {
                title: 'Рівень 3',
                items: [
                    {
                        icon: '/images/icon-gsm-small.png',
                        label: 'GSM мережа',
                    },
                ],
            },
            {
                title: 'Рівень 2',
                items: [
                    {
                        icon: '/images/icon-onboard-small.png',
                        label: 'Бортове обладнання',
                    },
                    {
                        icon: '/images/icon-terminal-small.png',
                        label: 'Мережа реалізації',
                    },
                    {
                        icon: '/images/icon-controller-small.png',
                        label: 'Обладнання контролю',
                    },
                ],
            },
            {
                title: 'Рівень 1',
                items: [
                    {
                        icon: '/images/icon-transport-card-small.png',
                        label: 'Транспортні картки',
                    },
                    {
                        icon: '/images/icon-bank-card-small.png',
                        label: 'Банківські картки',
                    },
                    {
                        icon: '/images/icon-ticket-small.png',
                        label: 'Паперовий квиток',
                    },
                    {
                        icon: '/images/icon-mob-app-small.png',
                        label: 'Мобільний застосунок',
                    },
                ],
            },
        ],
    },
    paperWidget: smartSociety.paperWidget,
} satisfies CivilPageContent
