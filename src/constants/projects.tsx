type LinkType = 'web' | 'android' | 'ios'

interface ProjectLink {
    type: LinkType
    url: string
}

export interface Projects {
    title: string
    description: string
    tools: string[]
    image: string
    responsibilities?: string[]
    link?: ProjectLink[]
    date: string
    isRecent: boolean
}

const projects: Projects[] = [
    {
        title: 'JAKI - Jakarta Kini',
        description:
            'JAKI is a one-stop digital platform that integrates various public services and accelerates digital transformations. It is developed with citizen-design services and customer centricity, personalised services, and provides an open data ecosystem aiming to co-create with stakeholders',
        tools: ['ReactJS', 'NodeJS', 'PostgreSQL', 'Kafka', 'gRPC'],
        image: '/images/projects/jaki.png',
        responsibilities: [
            'Developed the backend services',
            'Maintaining the backend services',
            'Provide technical support for the frontend team',
            'Documenting the API',
        ],
        link: [
            {
                type: 'web',
                url: 'https://jaki.jakarta.go.id',
            },
            {
                type: 'android',
                url: 'https://play.google.com/store/apps/details?id=id.go.jakarta.smartcity.jaki&hl=id',
            },
            {
                type: 'ios',
                url: 'https://apps.apple.com/id/app/jaki/id1509621798?l=id',
            },
        ],
        date: 'February 2020',
        isRecent: true,
    },
    {
        title: 'CRM - Cepat Respon Masyarakat',
        description: `CRM integrates all official complaint channels of the Jakarta Provincial Government. Incoming complaint reports are followed up more responsively, efficiently, and transparently.`,
        tools: ['ReactJS', 'NodeJS', 'PostgreSQL'],
        image: '/images/projects/crm.png',
        responsibilities: [
            'Developed the backend services',
            'Maintaining the backend services',
            'Provide technical support for the frontend team',
            'Documenting the API',
        ],
        link: [
            {
                type: 'web',
                url: 'https://crm.jakarta.go.id',
            },
        ],
        date: 'February 2020',
        isRecent: true,
    },
    {
        title: 'JDIH Kemkominfo',
        description: `JDIH (Jaringan Dokumentasi dan Informasi Hukum) Kemenkominfo
      (Ministry of Communication and Informatics) is a comprehensive
      legal documentation and information network established by the
      Ministry of Communication and Information Technology in
      Indonesia. JDIH serves as a centralized platform that provides
      easy access to legal documents, regulations, and information
      related to the field of communication and information
      technology.`,
        tools: ['Laravel', 'Flutter', 'Bootstrap'],
        image: '/images/projects/jdih.png',
        responsibilities: [
            'Develop mobile application using Flutter',
            'Develop backend services using Laravel',
            'Designed new layout for the website',
            'Ensuring the website is responsive',
        ],
        link: [
            {
                type: 'web',
                url: 'https://jdih.kominfo.go.id/',
            },
            {
                type: 'android',
                url: 'https://play.google.com/store/apps/details?id=com.kominfo.jdih_mobile&hl=en&gl=US',
            },
            {
                type: 'ios',
                url: 'https://apps.apple.com/id/app/jdih-kemkominfo/id6447154641',
            },
        ],
        date: 'February 2023',
        isRecent: true,
    },
    {
        title: 'AJK - Anugrah Jurnalistik Kominfo',
        description: `AJK (Anugrah Jurnalistik Kominfo) is a platform for the Ministry of Communication and Informatics to provide awards to journalists who have made significant contributions to the field of communication and information.`,
        tools: ['ReactJS', 'Strapi', 'PostgreSQL'],
        image: '/images/projects/ajk.png',
        responsibilities: [
            'Developed the frontend using ReactJS',
            'Developed the backend services using strapi',
            'Designed a layout for the website',
            'Ensuring the website is responsive',
        ],
        link: [
            {
                type: 'web',
                url: 'https://ajk.kominfo.go.id/',
            },
        ],
        date: 'August 2023',
        isRecent: true,
    },
    {
        title: 'SIKAP - Sistem Informasi Advokasi dan Pertimbangan Hukum',
        description: `An application designed to facilitate the planning, preparation, and monitoring of activities within the Ministry of Communication and Information Technology, aiming to expedite processes, enhance transparency, efficiency, and foster direct collaboration with relevant parties.`,
        tools: ['VueJS', 'NodeJS', 'PostgreSQL'],
        image: '/images/projects/sikap.png',
        responsibilities: [
            'Developed the frontend using VueJS',
            'Developed the backend services using NodeJS',
            'Designed a layout for the website',
            'Ensuring the website is responsive',
        ],
        link: [
            {
                type: 'web',
                url: 'https://sikap.kominfo.go.id/',
            },
        ],
        date: 'March 2022',
        isRecent: false,
    },
    {
        title: 'PPAT by Kementerian ATR/BPN',
        description: `The PPAT application developed for the Ministry of Agrarian and Spatial Planning/National Land Agency (ATR/BPN) serves as a means of registration, appointment, scheduling of exams, and inauguration for prospective PPAT candidates (Land Deed Officials). With the existence of this PPAT application, the registration process and scheduling of PPAT candidates' exams become more efficient and organized. Prospective PPAT participants can easily access information regarding exam schedules and receive updates regarding the selection results.    `,
        tools: ['.Net 5.0', 'ReactJS', 'PostgreSQL', 'Keycloak'],
        image: '/images/projects/ppat.png',
        responsibilities: [
            'Developed the frontend using ReactJS',
            'Developed the backend services using .Net 5.0',
            'Designed a layout for the website',
            'Ensuring the website is responsive',
        ],
        link: null,
        date: 'March 2022',
        isRecent: true,
    },
    {
        title: 'PLN Power Plant Monitoring',
        description: `The PLN Power Plant Auxiliary Monitoring application is designed to provide real-time monitoring and analysis of the electricity generated by the power plant dam. This innovative solution leverages advanced technologies, including Grafana, Node-RED, and InfluxDB, to ensure accurate and reliable measurement of current flow, enabling efficient power generation and management.`,
        tools: ['Node-RED', 'Grafana', 'InfluxDB'],
        image: '/images/projects/pln.png',
        responsibilities: [
            'Design a node-red flow',
            'Connecting the sensor to the node-red via mqtt protocol',
            'Design a dashboard using grafana',
            'Store the data to influxdb',
        ],
        link: null,
        date: 'March 2022',
        isRecent: true,
    },
    {
        title: 'JAKEVO',
        description: `JAKEVO is an online service application for licensing and non-licensing matters in DKI Jakarta through a single portal. This application facilitates residents of DKI Jakarta to access services more quickly and easily. Various services are available through JakEVO, such as building permits for residential properties (IMB), spatial planning permits in the DKI region, and notably, the submission of Travel Permits (Surat Izin Keluar Masuk or SIKM) during the travel ban in 2021.`,
        tools: ['AngularJS', 'Laravel', 'PostgreSQL'],
        image: '/images/projects/jakevo.png',
        responsibilities: [
            'Developed the frontend using AngularJS',
            'Developed the backend services using Laravel',
            'Design a layout for the website',
            'Ensuring the website is responsive',
        ],
        link: [
            {
                type: 'web',
                url: 'https://jakevo.jakarta.go.id',
            },
        ],
        date: 'May 2018',
        isRecent: false,
    },
    {
        title: 'Halo Bahasa by Kemendikbud.',
        description: `Halobahasa App, developed by the Ministry of Education, Culture, Research, and Technology, is a revolutionary all-in-one smart application that integrates various language services and products into a single platform.`,
        tools: ['VueJS', 'NodeJS', 'Express', 'PostgreSQL', 'React Native'],
        image: '/images/projects/halo-bahasa.png',
        responsibilities: [
            'Developed the frontend using VueJS',
            'Developed the backend services using NodeJS',
            'Design a layout for the website',
            'Ensuring the website is responsive',
        ],
        link: [
            {
                type: 'web',
                url: 'https://halobahasa.kemdikbud.go.id/tentang',
            },
        ],
        date: 'May 2022',
        isRecent: false,
    },
    {
        title: 'Rumaloka.id',
        description: `Rumaloka is a platform designed to facilitate you in acquiring your dream residence with convenient access to transactions and financing application processes.`,
        tools: ['ReactJS', 'NextJS', 'Laravel', 'PostgreSQL'],
        image: '/images/projects/rumaloka.png',
        responsibilities: [
            'Developed the frontend using ReactJS',
            'Developed the backend services using Laravel',
            'Design a layout for the website',
            'Ensuring the website is responsive',
        ],
        date: 'October 2022',
        link: [
            {
                type: 'web',
                url: 'https://rumaloka.vercel.app/',
            },
        ],
        isRecent: false,
    },
    {
        title: 'Smart Airport Indonesia by PT. Angkasa Pura I',
        description: `Smart Airport Indonesia App revolutionizes travel by offering real-time flight schedules, facility information, and interactive indoor maps. Powered by beacon technology under IndoorAtlas platform.`,
        tools: ['Flutter', 'Laravel', 'Indoor Atlas', 'PostgreSQL'],
        image: '/images/projects/smart-airport.png',
        responsibilities: [
            'Developed the frontend using Flutter',
            'Developed the backend services using Laravel',
            'Map the airport using IndoorAtlas and Beacon',
        ],
        date: 'January 2021',
        isRecent: false,
    },
    {
        title: 'ERP System for PT. Agrinesia Raya (Lapis Bogor Sangkuriang)',
        description: `The ERP system implemented for PT. Agrinesia Raya streamlines operations with its integrated app encompassing inventory management, purchasing, accounting, point of sale, and asset management.`,
        tools: ['Laravel', 'PostgreSQL', 'Bootstrap'],
        image: '/images/projects/lbs.png',
        responsibilities: [
            'Developed the backend services using Laravel',
            'Design a database schema',
            'Design a layout for the website',
            'Ensuring the website is responsive',
        ],
        link: null,
        date: 'August 2016',
        isRecent: false,
    },
    {
        title: 'Official BMW Website by PT. Tunas Mobilindo Parama.',
        description: `The official BMW website by PT. Tunas Mobilindo Parama is designed to provide a seamless experience for customers to browse and purchase BMW cars. This website is equipped with a cars catalog, booking service and dealer location.`,
        tools: ['Wordpress', 'MySQL'],
        image: '/images/projects/bmw.png',
        responsibilities: [
            'Developed the frontend using Wordpress',
            'Design a layout for the website',
            'Ensuring the website is responsive',
        ],
        link: [
            {
                type: 'web',
                url: 'https://www.bmw-tunas.co.id',
            },
        ],
        date: 'June 2015',
        isRecent: false,
    },

    {
        title: 'Travel Management & Scheduling System for Inspira Tour',
        description: `The Travel Management & Scheduling System by Inspira Tour is an innovative application designed to streamline and enhance the travel management process for both travelers and tour operators. This comprehensive platform offers a range of features aimed at providing a seamless and enjoyable travel experience.`,
        tools: ['NodeJS', 'MongoDB', 'AngularJS'],
        image: '/images/projects/inspira-tour.png',
        responsibilities: [
            'Developed the backend services using NodeJS',
            'Design a database schema',
            'Design a layout for the website',
            'Ensuring the website is responsive',
        ],
        date: 'August 2016',
        link: [
            {
                type: 'web',
                url: 'http://icrm.inspiratour.co.id',
            },
        ],
        isRecent: false,
    },
    {
        title: 'Company Profile Website for PT. Jaya Metal Teknika',
        description: `PT. Jaya Metal Teknika, a leading industrial machinery and equipment trading company. The company sources high-quality machinery and equipment from renowned manufacturers in Japan, Germany, Switzerland, Australia, and Taiwan.`,
        tools: ['Wordpres', 'MySQL'],
        image: '/images/projects/jmt.png',
        responsibilities: [
            'Developed the frontend using Wordpress',
            'Design a layout for the website',
            'Ensuring the website is responsive',
        ],
        link: [
            {
                type: 'web',
                url: 'https://jayametal.co.id',
            },
        ],
        date: 'August 2014',
        isRecent: false,
    },
]

export default projects
