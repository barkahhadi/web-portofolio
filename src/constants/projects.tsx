type LinkType = "web" | "android" | "ios";

interface ProjectLink {
  type: LinkType;
  url: string;
}

export interface Projects {
  title: string;
  description: string;
  tools: string[];
  image: string;
  link?: ProjectLink[];
  date: string;
  isRecent: boolean;
}

const projects: Projects[] = [
  {
    title: "JDIH Kemkominfo",
    description: `JDIH (Jaringan Dokumentasi dan Informasi Hukum) Kemenkominfo
      (Ministry of Communication and Informatics) is a comprehensive
      legal documentation and information network established by the
      Ministry of Communication and Information Technology in
      Indonesia. JDIH serves as a centralized platform that provides
      easy access to legal documents, regulations, and information
      related to the field of communication and information
      technology.`,
    tools: ["Laravel", "Flutter", "Bootstrap"],
    image: "/images/projects/jdih.png",
    link: [
      {
        type: "web",
        url: "https://jdih.kominfo.go.id/",
      },
      {
        type: "android",
        url: "https://play.google.com/store/apps/details?id=com.kominfo.jdih_mobile&hl=en&gl=US",
      },
      {
        type: "ios",
        url: "https://apps.apple.com/id/app/jdih-kemkominfo/id6447154641",
      },
    ],
    date: "February 2023",
    isRecent: true,
  },
  {
    title: "PPAT by Kementerian ATR/BPN",
    description: `The PPAT application developed for the Ministry of Agrarian and Spatial Planning/National Land Agency (ATR/BPN) serves as a means of registration, appointment, scheduling of exams, and inauguration for prospective PPAT candidates (Land Deed Officials). With the existence of this PPAT application, the registration process and scheduling of PPAT candidates' exams become more efficient and organized. Prospective PPAT participants can easily access information regarding exam schedules and receive updates regarding the selection results.    `,
    tools: [".Net 5.0", "ReactJS", "PostgreSQL", "Keycloak"],
    image: "/images/projects/ppat.png",
    link: null,
    date: "March 2022",
    isRecent: true,
  },
  {
    title: "PLN Power Plant Monitoring",
    description: `The PLN Power Plant Auxiliary Monitoring application is designed to provide real-time monitoring and analysis of the electricity generated by the power plant dam. This innovative solution leverages advanced technologies, including Grafana, Node-RED, and InfluxDB, to ensure accurate and reliable measurement of current flow, enabling efficient power generation and management.`,
    tools: ["Node-RED", "Grafana", "InfluxDB"],
    image: "/images/projects/pln.png",
    link: null,
    date: "March 2022",
    isRecent: true,
  },
  {
    title: "Halo Bahasa by Kemendikbud.",
    description: `Halobahasa App, developed by the Ministry of Education, Culture, Research, and Technology, is a revolutionary all-in-one smart application that integrates various language services and products into a single platform.`,
    tools: ["VueJS", "NodeJS", "Express", "PostgreSQL", "React Native"],
    image: "/images/projects/halo-bahasa.png",
    link: [
      {
        type: "web",
        url: "https://halobahasa.kemdikbud.go.id/tentang",
      },
    ],
    date: "May 2022",
    isRecent: false,
  },
  {
    title: "Smart Airport Indonesia by PT. Angkasa Pura I",
    description: `Smart Airport Indonesia App revolutionizes travel by offering real-time flight schedules, facility information, and interactive indoor maps. Powered by beacon technology under IndoorAtlas platform.`,
    tools: ["Flutter", "Laravel", "Indoor Atlas", "PostgreSQL"],
    image: "/images/projects/smart-airport.png",
    date: "January 2021",
    isRecent: false,
  },
  {
    title: "ERP System for PT. Agrinesia Raya (Lapis Bogor Sangkuriang)",
    description: `The ERP system implemented for PT. Agrinesia Raya streamlines operations with its integrated app encompassing inventory management, purchasing, accounting, point of sale, and asset management.`,
    tools: ["Laravel", "PostgreSQL", "Bootstrap"],
    image: "/images/projects/lbs.png",
    link: null,
    date: "August 2016",
    isRecent: true,
  },
  {
    title: "Official BMW Website by PT. Tunas Mobilindo Parama.",
    description: `The official BMW website by PT. Tunas Mobilindo Parama is designed to provide a seamless experience for customers to browse and purchase BMW cars. This website is equipped with a cars catalog, booking service and dealer location.`,
    tools: ["Wordpress", "MySQL"],
    image: "/images/projects/bmw.png",
    link: [
      {
        type: "web",
        url: "https://www.bmw-tunas.co.id",
      },
    ],
    date: "June 2015",
    isRecent: false,
  },

  {
    title: "Travel Management & Scheduling System for Inspira Tour",
    description: `The Travel Management & Scheduling System by Inspira Tour is an innovative application designed to streamline and enhance the travel management process for both travelers and tour operators. This comprehensive platform offers a range of features aimed at providing a seamless and enjoyable travel experience.`,
    tools: ["NodeJS", "PostgreSQL", "MongoDB"],
    image: "/images/projects/inspira-tour.png",
    date: "August 2016",
    link: [
      {
        type: "web",
        url: "http://icrm.inspiratour.co.id",
      },
    ],
    isRecent: false,
  },
  {
    title: "Company Profile Website for PT. Jaya Metal Teknika",
    description: `PT. Jaya Metal Teknika, a leading industrial machinery and equipment trading company. The company sources high-quality machinery and equipment from renowned manufacturers in Japan, Germany, Switzerland, Australia, and Taiwan.`,
    tools: ["Wordpres", "MySQL"],
    image: "/images/projects/jmt.png",
    date: "August 2014",
    isRecent: false,
  },
];

export default projects;