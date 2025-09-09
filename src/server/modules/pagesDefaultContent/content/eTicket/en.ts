import { ETicketPageContent } from '@common/pagesContent/eTicket'

export default {
    seo: {
        title: 'GIS - Electronic Ticket in Transport (AFTP)',
        description:
            'The Automated Fare and Passenger Accounting System (AFTP) is a comprehensive solution developed by the IT company LLC "Ukrainian Geoinformation Systems" and implemented by the operator LLC "GIS-SERVICE". Currently, the system is successfully operating in 5 urban territorial communities and serves over 750,000 passengers.',
    },
    heroWidget: {
        title: 'Electronic Ticket in Transport (AFTP)',
        description:
            'The Automated Fare and Passenger Accounting System (AFTP) is a comprehensive solution developed by the IT company LLC "Ukrainian Geoinformation Systems" and implemented by the operator LLC "GIS-SERVICE". Currently, the system is successfully operating in 5 urban territorial communities and serves over 750,000 passengers.',
        image: '/images/e-ticket-hero-bg.jpg',
        eTicketPortal: {
            title: 'Information and Reference Resource on the E-Ticket',
            link: 'https://socium.vin',
            image: '/images/e-ticket-portal-image.jpg',
        },
    },
    afpsWidget: {
        title: 'The Automated Fare and Passenger Accounting System is:',
        list: [
            'A centralized dispatching system that maintains up-to-date information on routes, schedules, and carriers, providing tools for managing and controlling the route network – for transport service customers.',
            'A transport enterprise management system with workstations for managers, logisticians, HR departments, dispatchers, mechanics, and other staff, allowing elimination of paperwork and ensuring control over the company’s operations – for carriers.',
            'Convenient contactless payment methods and the use of available benefits during travel. Public transport updates through open data sources, information displays at stops, and mobile applications for fare payments.',
        ],
    },
    paperWidget: {
        title: null,
        children: [
            {
                type: 'client-paper-card',
                title: 'In addition, the central administrative platform provides:',
                subtitle: null,
                image: '/images/e-ticket-info.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Receiving data from all AFTP systems implemented across Ukraine.',
                        'An analytics center for generating reports and compiling statistical data on the country’s transport infrastructure.',
                        'Monitoring the current state of the transport network.',
                        'Reporting and modeling of the AFTP.',
                        'Data exchange with state digital services.',
                    ],
                    advantages: [],
                },
            },
            {
                type: 'client-paper-list',
                title: 'Advantages of AFTP Implementation',
                children: [
                    {
                        image: '/images/icon-contact-small.png',
                        content:
                            'Financial transparency: Transaction monitoring in regions, payment statistics, and subsidies for privileged categories.',
                    },
                    {
                        image: '/images/icon-dispatching-small.png',
                        content:
                            'Efficient dispatching: Monitoring of trip execution, analysis of downtimes, and route optimization.',
                    },
                    {
                        image: '/images/icon-analytic-small.png',
                        content:
                            'Analytics and modeling: Assessment of route profitability and loss, planning for fleet upgrades, and ticket price adjustments.',
                    },
                    {
                        image: '/images/icon-car-small.png',
                        content:
                            'Improving transport quality: Monitoring cleanliness, service quality, and passenger comfort in public transport.',
                    },
                    {
                        image: '/images/icon-people-small.png',
                        content:
                            'Social component: Support for privileged categories, development of tourist routes, and social advertising.',
                    },
                ],
            },
        ],
    },
    implementationAfpsWidget: {
        content:
            '<span>AFTP implementation</span> contributes to improving the efficiency of public transport management, enhancing passenger service quality, and ensuring financial transparency in the transportation sector. Contact us if you are interested in this solution!',
    },
} satisfies ETicketPageContent
