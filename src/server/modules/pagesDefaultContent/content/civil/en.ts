import { CivilPageContent } from '@common/pagesContent/civil'
import smartSociety from '../smartSociety/en'

export default {
    seo: {
        title: 'GIS - CIVIL',
        description: 'City resident mobile application - CIVIL',
    },
    heroWidget: {
        title: 'City Resident Mobile Application - CIVIL',
        description: '<h2>Civil — an innovative digital tool for residents</h2><p>Developed as part of the implementation of the electronic ticketing system and the "smart city" concept, following the principle of "all services in one app".</p><p>With Civil, Uzhhorod residents gain convenient access to a wide range of city services.</p><h3>Features available today:</h3><ul><li>payment for public transport rides within the city;</li><li>verification of provided benefits via the Diia service;</li><li>viewing public transport schedules and real-time tracking;</li><li>up-to-date city news and announcements;</li><li>easy communication with local authorities.</li></ul><h3>Coming soon:</h3><p>The list of payable services will be expanded to include:</p><ul><li>parking payments;</li><li>utility services;</li><li>other city services.</li></ul><p><p></p><a href="https://info.ua-gis.com/tutorial" target="_blank">User Guide</a></p>',
        video: '',
        videoPreview: '/images/home-smart-society-video-preview.jpg',
    },
    trekWidget: {
        title: 'SCHEME of interaction between CIVIL system components',
        levels: [
            {
                title: 'Level 5',
                items: [
                    {
                        icon: '/images/icon-municipality-small.png',
                        label: 'Central municipal system',
                    },
                    {
                        icon: '/images/icon-operator-small.png',
                        label: 'Central operator system',
                    },
                    {
                        icon: '/images/icon-transport-small.png',
                        label: 'Central transport company system',
                    },
                ],
            },
            {
                title: 'Level 4',
                items: [
                    {
                        icon: '/images/icon-server-small.png',
                        label: 'Cloud server (eCivM solution)',
                    },
                ],
            },
            {
                title: 'Level 3',
                items: [
                    {
                        icon: '/images/icon-gsm-small.png',
                        label: 'GSM network',
                    },
                ],
            },
            {
                title: 'Level 2',
                items: [
                    {
                        icon: '/images/icon-onboard-small.png',
                        label: 'On-board equipment',
                    },
                    {
                        icon: '/images/icon-terminal-small.png',
                        label: 'Sales network',
                    },
                    {
                        icon: '/images/icon-controller-small.png',
                        label: 'Control equipment',
                    },
                ],
            },
            {
                title: 'Level 1',
                items: [
                    {
                        icon: '/images/icon-transport-card-small.png',
                        label: 'Transport cards',
                    },
                    {
                        icon: '/images/icon-bank-card-small.png',
                        label: 'Bank cards',
                    },
                    {
                        icon: '/images/icon-ticket-small.png',
                        label: 'Paper ticket',
                    },
                    {
                        icon: '/images/icon-mob-app-small.png',
                        label: 'Mobile application',
                    },
                ],
            },
        ],
    },
    paperWidget: smartSociety.paperWidget,
} satisfies CivilPageContent
