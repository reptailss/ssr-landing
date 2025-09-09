import { SmartSocietyPageContent } from '@common/pagesContent/smartSociety'

export default {
    seo: {
        title: 'GIS - Smart Society',
        description: 'SMART SOCIETY is a unified cloud platform for a digital city. It is a universal cloud platform that integrates all city digital services into a single ecosystem. We build a flexible and scalable infrastructure where local administrations can choose the modules they need and integrate them at any time without extra costs for complex IT developments.',
    },
    heroWidget: {
        title: 'Smart Society',
        description: 'SMART SOCIETY is a unified cloud platform for a digital city.<br/><br/>SMART SOCIETY is a universal cloud platform that integrates all city digital services into a single ecosystem. We build a flexible and scalable infrastructure where local administrations can choose the modules they need and integrate them at any time without extra costs for complex IT developments.',
        video: '',
        videoPreview: '/images/home-smart-society-video-preview.jpg',
    },
    uniqueWidget: {
        title: 'What Makes Us Unique?',
        list: [
            {
                type: 'card',
                title: 'Unified Cloud Platform',
                desktopCol: 1,
                list: [
                    'All urban services operate within a single environment, enabling rapid integration and data exchange between systems.',
                    'Platform updates and support are handled centrally, requiring no additional administrative resources.',
                ],
            },
            {
                type: 'card',
                title: 'Modular Approach — The City Chooses What It Needs',
                desktopCol: 1,
                list: [
                    'Each city or community can independently choose the set of services they need by selecting only the relevant modules.',
                    'The absence of unnecessary features helps optimize costs and launch only the required solutions.',
                ],
            },
            {
                type: 'image',
                desktopCol: 1,
                image: '/images/smart-society-internet.jpg',
            },
            {
                type: 'image',
                desktopCol: 2,
                image: '/images/smart-society-diya.jpg',
            },
            {
                type: 'card',
                title: 'Integration with External Services',
                desktopCol: 1,
                list: [
                    'SMART SOCIETY easily integrates with other public and private digital solutions: Diia, state registries, banking systems, telecom operators, and IoT devices.',
                    'An open API enables quick addition of new services and customization of the platform to meet a city’s unique needs.',
                ],
            },
            {
                type: 'card',
                title: 'Ready for Rapid Deployment',
                desktopCol: 1,
                list: [
                    'Our solutions require no complex configurations — integration with existing urban infrastructure is fast and seamless.',
                    'The platform is scalable — new services can be added without the need to update the entire system.',
                ],
            },
            {
                type: 'card',
                title: 'Security and Compliance with International Standards',
                desktopCol: 1,
                list: [
                    'We employ cutting-edge cybersecurity methods including data encryption, multi-factor authentication, and distributed computing.',
                    'Data is stored in secure data centers with the option to choose server locations to comply with local legislation.',
                ],
            },
            {
                type: 'image',
                desktopCol: 1,
                image: '/images/smart-society-security.jpg',
            },
        ],
    },
    smartSocietyWidget: {
        title: 'Smart Society',
        description: '— is not just a set of digital solutions, but a unified infrastructure for smart city management. You choose what your community needs, and we ensure rapid implementation and seamless operation of all services.',
        banner: {
            icons: [
                '/images/icon-car-2-small.svg',
                '/images/icon-fire-small.svg',
                '/images/icon-basket-small.svg',
                '/images/icon-bulb-small.svg',
                '/images/icon-parking-small.svg',
            ],
            title: 'A smart city is a city that works for its people.',
            image: '/images/smart-society-bg.jpg',
        },
    },
    paperWidget: {
        title: 'System Components',
        children: [
            {
                type: 'client-paper-card',
                title: 'Administrative and Analytical Module',
                subtitle: 'A centralized system for collecting, analyzing, and visualizing urban data to efficiently manage city infrastructure.',
                image: '/images/smart-society-app-admin.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Monitoring key urban indicators — transport status, utilities, safety, ecology, and social sectors.',
                        'Big data analysis — identifying trends and anomalies.',
                        'Interactive analytical dashboards — summary reports for local authorities.',
                        'Automated forecasting — using AI and Big Data for decision-making.',
                    ],
                    advantages: [
                        'Transparent urban resource management',
                        'Prompt decision-making',
                        'Improved interdepartmental communication',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Municipal Services Management Module',
                subtitle: 'An automated infrastructure management system to improve service quality.',
                image: '/images/smart-society-services.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Monitoring and managing special vehicles — waste collection, snow removal, etc.',
                        'Automated task planning — assignment and control of requests.',
                        'Resource consumption control — analysis of water, electricity, and fuel usage.',
                    ],
                    advantages: [
                        'Efficient municipal budget use',
                        'Improved utility service quality',
                        'Minimized human error',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Parking Management Module',
                subtitle: 'Smart parking space management system for driver convenience and traffic optimization.',
                image: '/images/smart-society-parking.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Electronic parking spot reservation',
                        'Real-time parking occupancy monitoring',
                        'Automated parking payments',
                        'Integration with tow trucks and police',
                    ],
                    advantages: [
                        'Reduced city center congestion',
                        'Transparent parking control',
                        'Driver convenience',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'School Cafeteria Meal Management Module',
                subtitle: 'Automated accounting and payment system for school meals.',
                image: '/images/smart-dining-room.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Electronic menus and personalized diets',
                        'Cashless payments via electronic card',
                        'Tracking consumed meals and parental expenses',
                        'Food quality control and reporting',
                    ],
                    advantages: [
                        'Reduced cafeteria queues',
                        'Monitoring children’s nutrition',
                        'Financial transparency',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Access to Tourist and Green Zones Module',
                subtitle: 'Automated system for ticketing, access control, and visitor tracking at popular tourist spots.',
                image: '/images/smart-society-tourist.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Electronic tickets and passes',
                        'Automated entry/exit',
                        'Crowd monitoring in recreational zones',
                        'Interactive maps with location info',
                        'Video surveillance and security systems',
                    ],
                    advantages: [
                        'Convenience for tourists',
                        'Contactless payments, no queues',
                        'Environmental load control',
                        'Tourism development opportunities',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Resident’s Electronic Cabinet/App',
                subtitle: 'A personalized portal for residents that unites all city services in a single system.',
                image: '/images/smart-society-electronic-cabinet.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Payments (public transport, parking, utilities, etc.);',
                        'Access to and use of travel and service benefits, discount program;',
                        'Tracking public transport and trip planning;',
                        'Expense control via electronic ticket;',
                        'Submitting requests to city administration;',
                        'Appointment booking at public institutions;',
                    ],
                    advantages: [
                        'Convenience for tourists',
                        'Contactless payment, no queues',
                        'Environmental impact control',
                        'Additional opportunities for tourism development',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Utility Payment Module',
                subtitle: 'An automated system for paying utilities via a unified platform.',
                image: '/images/smart-society-communal-module.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Commission-free online payments',
                        'All services with a single payment',
                        'Automatic debt reminders',
                        'Integration with banks and mobile wallets',
                    ],
                    advantages: [
                        'Transparent payments',
                        'Easy and convenient payment',
                        'Reduced administrative costs',
                        'Ability to monitor service consumption',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Citizen Request Handling Module',
                subtitle: 'A centralized system for receiving and processing citizen requests.',
                image: '/images/smart-society-hotline-module.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Electronic request registration',
                        'Real-time request status tracking',
                        'Automated categorization of requests',
                    ],
                    advantages: [
                        'Reduced processing time',
                        'Increased citizen trust in authorities',
                        'Analytics on city’s main issues',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'City News Portal',
                subtitle: 'A single information platform for distributing city news.',
                image: '/images/smart-society-news-module.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'News from city administration and services',
                        'Emergency alerts',
                        'Announcements of events and activities',
                    ],
                    advantages: [
                        'Access to up-to-date information',
                        'Transparent city governance',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Administrative Service Center Management Module',
                subtitle: 'An automated system for managing administrative services.',
                image: '/images/smart-society-tsnap-module.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Electronic queue and online booking',
                        'Operator workload monitoring',
                        'Digital documents and archives',
                    ],
                    advantages: [
                        'Minimized queues',
                        'Faster service delivery',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Benefit Policy Management Module',
                subtitle: 'A unified database of beneficiaries with automated compensation calculations.',
                image: '/images/smart-society-benefits-module.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [],
                    advantages: [
                        'Fair distribution of benefits',
                        'Integration with state digital services, automatic beneficiary identification',
                        'Reduced bureaucracy',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Social Discount Module in Retail Chains',
                subtitle: 'A system for automatic application of benefits at checkout.',
                image: '/images/smart-society-benefits-shop-module.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [],
                    advantages: [
                        'Accessibility of social support',
                        'Creation and operation of local social discount programs',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Smart Bus Stops',
                subtitle: 'Modern public transport stops with digital services.',
                image: '/images/smart-society-stops.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Arrival time information displays',
                        'Charging stations for gadgets',
                        'Wi-Fi and emergency call buttons',
                    ],
                    advantages: [
                        'Comfortable waiting experience',
                        'Improved resident mobility',
                    ],
                },
            },
        ],
    },
    getPresentationWidget: {
        description: '<span>Smart City</span> — is a city that works for people. Let’s build a digital future together!',
    },
} satisfies SmartSocietyPageContent
