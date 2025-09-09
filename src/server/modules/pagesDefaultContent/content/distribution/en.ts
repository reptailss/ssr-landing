import { DistributionPageContent } from '@common/pagesContent/distribution'

export default {
    seo: {
        title: 'GIS - Distribution',
        description:
            'The system has demonstrated high-quality performance; users receive various documentation regarding their business entities and are thus always informed about what is happening. It provides access to all reports from any device. All that is required is an Internet connection, which makes the system easily accessible to the user.',
    },
    heroWidget: {
        title: 'Distribution',
        description:
            'The system has demonstrated high-quality performance; users receive various documentation regarding their business entities and are thus always informed about what is happening. It provides access to all reports from any device. All that is required is an Internet connection, which makes the system easily accessible to the user.',
    },
    paperWidget: {
        title: '',
        children: [
            {
                type: 'client-paper-card',
                title: 'Software Part',
                subtitle: '',
                image: '/images/distribution-program.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'The software is not tied to a specific operating system and therefore can work with any of them.',
                        'The system implements distributed operation modes: administrator, dispatcher, user. It does not require a separate workstation or the installation of special software for administration or dispatcher functionality. Access to the system is provided via a standard web browser.',
                        'Well-known mapping services can be used for the geoinformation support of the monitoring system.',
                    ],
                    advantages: [],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Hardware Part',
                subtitle: '',
                image: '/images/distribution-device.jpg',
                children: {
                    type: 'client-paper-card-ul',
                    list: [
                        'The system can also be used on any modern vehicles without interfering with the standard electronic systems.',
                        'The system is fully autonomous and does not require intervention in the operation of the vehicle’s built-in systems.',
                    ],
                    advantages: [],
                },
            },
            {
                type: 'client-paper-card',
                title: 'Sensors',
                subtitle: '',
                image: '/images/distribution-sensors.jpg',
                children: {
                    type: 'client-paper-card-editor',
                    content:
                        'To organize parameter control, each user of the system is able to create control sensors for a specific parameter or a group of parameters. Currently, the system supports 25 different sensors, each assigned a specific algorithm of actions.',
                },
            },
        ],
    },
} satisfies  DistributionPageContent
