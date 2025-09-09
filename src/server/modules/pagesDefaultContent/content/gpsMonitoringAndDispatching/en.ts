import { GpsMonitoringAndDispatchingPageContent } from '@common/pagesContent/gpsMonitoringAndDispatching'

export default {
    seo: {
        title: 'GIS - GPS Monitoring and Dispatching',
        description: 'A comprehensive transport management system that allows real-time monitoring of location, technical condition, and performance of vehicles.',
    },
    heroWidget: {
        title: 'GPS Monitoring and Dispatching',
        description: 'A comprehensive transport management system that allows real-time monitoring of location, technical condition, and performance of vehicles.',
        image: '/images/gps-mon-disp-hero-ng.jpg',
    },
    functionalityWidget: {
        title: 'Functionality',
        functionalityList: [
            {
                image: '/images/icon-gps-small.png',
                title: 'GPS Monitoring',
                description: 'Real-time tracking of coordinates, speed, and direction on an interactive map.',
            },
            {
                image: '/images/icon-fuel-small.png',
                title: 'Fuel Control',
                description: 'Fuel consumption analysis, theft prevention, and excess usage alerts.',
            },
            {
                image: '/images/icon-dispatching-small.png',
                title: 'Dispatching',
                description: 'Route planning and adjustment based on current traffic conditions.',
            },
            {
                image: '/images/icon-docs-small.png',
                title: 'Automated Reports',
                description: 'Detailed transport operation analysis including mileage, costs, downtime, and route efficiency.',
            },
            {
                image: '/images/icon-city-small.png',
                title: 'Integration',
                description: 'With other urban systems – compatibility with city management digital platforms.',
            },
        ],
        advantages: {
            title: 'Advantages:',
            list: [
                'Reduction of operating costs by 20-30%',
                'Increased vehicle efficiency',
                'Transparency of carrier operations',
            ],
        },
        tags: [
            'Public Transport',
            'Personal Transport Monitoring',
            'One-time and Special Trips',
            'Freight Transport Monitoring Solutions',
            'Emergency Services Solutions',
            'Utility and Service Provider Solutions',
        ],
    },
    paperWidget: {
        title: null,
        children: [
            {
                type: 'client-paper-card',
                title: 'Public Transport',
                subtitle: 'An intelligent public transport management system that enables cities to optimize passenger services and improve service quality for residents.',
                image: '/images/gps-mon-disp-public-transport.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Vehicle tracking – real-time monitoring of buses, trolleybuses, and trams.',
                        'Route network optimization – passenger flow analytics for adjusting schedules and routes.',
                        'Automated schedule management – interval calculation based on dynamic traffic changes.',
                        'Passenger notification system – information boards, mobile apps, and SMS alerts about vehicle arrival.',
                        'Occupancy monitoring – use of IoT sensors to determine the number of passengers on board.',
                    ],
                    advantages: [
                        'Reduced intervals between trips',
                        'Improved passenger comfort',
                        'Transparency of carrier operations and minimization of "shadow" transport',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Personal Transport Monitoring',
                subtitle: 'An intelligent public transport management system that enables cities to optimize passenger services and improve service quality for residents.',
                image: '/images/gps-mon-disp-monitoring.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Vehicle tracking – real-time monitoring of buses, trolleybuses, and trams.',
                        'Route network optimization – passenger flow analytics for adjusting schedules and routes.',
                        'Automated schedule management – interval calculation based on dynamic traffic changes.',
                        'Passenger notification system – information boards, mobile apps, and SMS alerts about vehicle arrival.',
                        'Occupancy monitoring – use of IoT sensors to determine the number of passengers on board.',
                    ],
                    advantages: [
                        'Reduced intervals between trips',
                        'Improved passenger comfort',
                        'Transparency of carrier operations and minimization of "shadow" transport',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'One-time and Special Trips',
                subtitle: 'An intelligent public transport management system that enables cities to optimize passenger services and improve service quality for residents.',
                image: '/images/gps-mon-disp-single-voyage.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Vehicle tracking – real-time monitoring of buses, trolleybuses, and trams.',
                        'Route network optimization – passenger flow analytics for adjusting schedules and routes.',
                        'Automated schedule management – interval calculation based on dynamic traffic changes.',
                        'Passenger notification system – information boards, mobile apps, and SMS alerts about vehicle arrival.',
                        'Occupancy monitoring – use of IoT sensors to determine the number of passengers on board.',
                    ],
                    advantages: [
                        'Reduced intervals between trips',
                        'Improved passenger comfort',
                        'Transparency of carrier operations and minimization of "shadow" transport',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Freight Transport Monitoring Solutions',
                subtitle: 'An intelligent public transport management system that enables cities to optimize passenger services and improve service quality for residents.',
                image: '/images/gps-mon-disp-solutions.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Vehicle tracking – real-time monitoring of buses, trolleybuses, and trams.',
                        'Route network optimization – passenger flow analytics for adjusting schedules and routes.',
                        'Automated schedule management – interval calculation based on dynamic traffic changes.',
                        'Passenger notification system – information boards, mobile apps, and SMS alerts about vehicle arrival.',
                        'Occupancy monitoring – use of IoT sensors to determine the number of passengers on board.',
                    ],
                    advantages: [
                        'Reduced intervals between trips',
                        'Improved passenger comfort',
                        'Transparency of carrier operations and minimization of "shadow" transport',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Emergency Services Solutions',
                subtitle: 'An intelligent public transport management system that enables cities to optimize passenger services and improve service quality for residents.',
                image: '/images/gps-mon-disp-helper.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Vehicle tracking – real-time monitoring of buses, trolleybuses, and trams.',
                        'Route network optimization – passenger flow analytics for adjusting schedules and routes.',
                        'Automated schedule management – interval calculation based on dynamic traffic changes.',
                        'Passenger notification system – information boards, mobile apps, and SMS alerts about vehicle arrival.',
                        'Occupancy monitoring – use of IoT sensors to determine the number of passengers on board.',
                    ],
                    advantages: [
                        'Reduced intervals between trips',
                        'Improved passenger comfort',
                        'Transparency of carrier operations and minimization of "shadow" transport',
                    ],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Utility and Service Provider Solutions',
                subtitle: 'An intelligent public transport management system that enables cities to optimize passenger services and improve service quality for residents.',
                image: '/images/gps-mon-disp-bus.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'Vehicle tracking – real-time monitoring of buses, trolleybuses, and trams.',
                        'Route network optimization – passenger flow analytics for adjusting schedules and routes.',
                        'Automated schedule management – interval calculation based on dynamic traffic changes.',
                        'Passenger notification system – information boards, mobile apps, and SMS alerts about vehicle arrival.',
                        'Occupancy monitoring – use of IoT sensors to determine the number of passengers on board.',
                    ],
                    advantages: [
                        'Reduced intervals between trips',
                        'Improved passenger comfort',
                        'Transparency of carrier operations and minimization of "shadow" transport',
                    ],
                },
            },
        ],
    },
    eTransportWidget: {
        content: '<span>e-Transport</span> is an innovative solution for city transport management, enabling cities, enterprises, and utilities to significantly increase efficiency, reduce costs, and ensure comfort for residents.',
    },
} satisfies GpsMonitoringAndDispatchingPageContent
