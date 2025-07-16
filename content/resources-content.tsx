import { title } from 'process';

interface ResourceItem {
  title: string;
  href: string;
  gridType?: string;
  items?: any[];
  isTab?: boolean;
}

export const GRID_TYPES = {
  GRID_LARGE: 'GRID_LARGE',
  GRID_LARGE_FLEXIBLE: 'GRID_LARGE_FLEXIBLE',
  GRID_READING_LIST: 'GRID_READING_LIST',
  GRID_TWITTER_FEED: 'GRID_TWITTER_FEED',
} as const;

export const RESOUCES_DESIGN_READING = [
  {
    title: 'Designing Design',
    author: 'Kenya Hara',
    href: null,
  },
  {
    title: 'Notes on the Synthesis of Form ',
    author: 'Christopher Alexander',
    href: null,
  },
  {
    title: 'Timeless Way of Building',
    author: 'Christopher Alexander',
    href: null,
  },
  {
    title: 'WHITE',
    author: 'Kenya Hara',
    href: null,
  },
  {
    title: 'Designing Japan: A Future Built on Aesthetics',
    author: 'Kenya Hara',
    href: null,
  },
  {
    title: 'Blaze Type: How to Design Fonts',
    author: 'Blaze Type',
    href: null,
  },
  {
    title: 'Feminist Designer',
    author: 'Alison Place',
    href: 'https://mitpress.mit.edu/9780262048422/feminist-designer/',
  },
  {
    title: 'How to Land in the Metaverse',
    author: 'Harry Nuriev',
    href: 'https://carpentersworkshopgallery.com/shop/books/how-to-land-in-the-metaverse-from-interior-design-to-the-future-of-design/',
  },
  {
    title: 'Ecologies of Becoming',
    author: 'Sougwen Chung',
    href: 'https://www.anteism.com/shop/ecologies-of-becoming-sougwen-chung',
  },

  {
    title: 'PALETTE mini 06: Transparent',
    author: 'Victionary',
    href: null,
  },
  {
    title: 'Caravaggio - The Complete Works',
    author: 'Tashchen',
    href: 'https://www.taschen.com/en/books/art/44812/caravaggio-the-complete-works/',
  },
  {
    title: 'Grid Systems in Graphic Design',
    author: 'Josef Müller-Brockmann',
    href: null,
  },
  // {
  //   title: 'The Study-book of Mediæval Architecture and Art ',
  //   author: 'Thomas Harper King',
  //   href: null,
  // },

  {
    title: 'IDEA Magazine - international graphic art and typography',
    author: 'IDEA',
    href: null,
  },
  {
    title: 'Logo Modernism',
    author: 'Tashchen',
    href: 'https://archive.org/details/logo_modernism/page/n51/mode/2up',
  },
  {
    title: 'Logo Beginnings',
    author: 'Tashchen',
    href: 'https://www.taschen.com/en/books/graphic-design/03454/logo-beginnings/',
  },
];

export const RESOUCES_ENGINEERING_READING = [
  {
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert Cecil Martin',
    href: null,
  },
];

export const RESOUCES_TOOLS_CONTENT = [
  {
    title: 'Server Mono Font',
    description: "Server Mono is an open-source typeface inspired by typewriters, Apple's San Francisco Mono, ASCII art, command-line interfaces, and programming tools.",
    label: 'Font',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/385a036e-a665-4d1c-9f63-dbd410f9b446.png',
      alt: 'Clean Code Book Cover',
    },
    href: 'https://servermono.com/',
  },
  {
    title: 'Diagram.page',
    description: 'A simple tool for creating diagrams and flowcharts.',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/5e4d5df2-bd8a-431e-b48c-0869b12f24b4.png',
      alt: 'Diagram Page',
    },
    href: 'https://diagram.page/',
  },
  {
    title: 'Next.js Offline Whisper to LLM',
    description: 'An offline-first, browser-based application that allows users to locally transcribe audio recordings into accurate, plain-text transcripts.',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/60bb1449-97f4-44ba-8348-3fbf47de0ba2.png',
      alt: 'Next.js Offline Whisper to LLM',
    },
    href: 'https://github.com/internet-development/nextjs-offline-whisper-to-llm',
  },
  {
    title: 'TXT.dev',
    description: 'TXT is a writing tool that deliberately stays simple. TXT is a different way to appreciate writing on The World Wide Web.',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/1171f052-b950-4d9b-b45c-355cac666ce0.png',
      alt: 'Next.js Offline Whisper to LLM',
    },
    href: 'https://txt.dev/',
  },
];

export const RESOUCES_MOOD_GENERAL = [
  {
    description: 'RPG-UI-01: mood board for retro-gaming UIs',
    img: {
      src: 'https://d2w9rnfcy7mm78.cloudfront.net/38115328/original_81a8895b4e5c85c6731b6a9ae44dc6b2.png?1752561371?bc=0',
      alt: 'Tool Preview',
    },
    href: 'https://www.are.na/www-jim/rpg-ui-01',
  },
  {
    description: 'Blog post template',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/5102be37-f1fc-4e8d-8ffb-6c7cad8c6791.png',
      alt: 'Blog template',
    },
    href: 'https://wireframes.internet.dev/examples/components/post',
  },
  {
    description: 'Scaled typography',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/e7ded86b-9f8f-474d-8d8a-96991f41a72e.png',

      alt: 'Tool Preview',
    },
    href: 'https://wireframes.internet.dev/examples/system/typography',
  },
  {
    description: 'Windows connected',
    img: {
      src: 'https://i.ibb.co/HTRHFygF/example-1.gif',
      alt: 'Tool Preview',
    },
    href: 'https://wireframes.internet.dev/examples/components/windows-connected',
  },
  {
    description: 'Data visualization graphs with D3',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/f2c20d58-2efe-4cd0-a3e7-f81f1537051d.png',
      alt: 'Tool Preview',
    },
    href: 'https://wireframes.internet.dev/examples/system/data-visualization',
  },
  // {
  //   description: 'Data visualization - histogram',
  //   img: {
  //     src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/5f9fb416-6e98-4703-9b7d-0a0f9007dae7.png',
  //     alt: 'Tool Preview',
  //   },
  //   href: 'https://wireframes.internet.dev/examples/system/data-visualization',
  // },
  {
    description: 'Thread replies component',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/0680e877-fedd-4248-a506-544b40184663.png',
      alt: 'Tool Preview',
    },
    href: 'https://wireframes.internet.dev/examples/features/threads',
  },
  {
    description: 'Color palette',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/4d784b69-ebb5-4e29-9597-cd7a269602d0.png',
      alt: 'Tool Preview',
    },
    href: 'https://wireframes.internet.dev/examples/system/colors',
  },
  {
    description: 'Search bar',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/43451182-41d1-475b-a9ae-c7f31c687968.png',
      alt: 'Tool Preview',
    },
    href: 'https://wireframes.internet.dev/examples/components/modals-website-prompt',
  },
  {
    description: 'Color picker',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/f6c3babe-8391-4a60-8fe8-2e6510cb9207.png',
      alt: 'Color Picker',
    },
    href: 'https://wireframes.internet.dev/examples/components/modals-color-picker',
  },
  {
    description: 'Search view 2',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/2534f80a-354c-4f5f-ae56-2ee51203010d.png',
      alt: 'Search View 2',
    },
    href: 'https://wireframes.internet.dev/examples/components/search-2',
  },
  {
    description: 'Windows with text',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/1a605d65-7bea-431e-9561-c28263e90faf.png',
      alt: 'Windows with text',
    },
    href: 'https://wireframes.internet.dev/examples/components/windows',
  },
  {
    description: 'Bento layout dashboard',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c7d73479-f946-426b-becc-2bf7b7018295.png',
      alt: 'Bento layout',
    },
    href: 'https://wireframes.internet.dev/examples/components/dashboard',
  },
  {
    description: 'Button rainbow hover state',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/eb126fc1-3b64-44a2-b2c0-9280d8f24d30.png',
      alt: 'Button rainbow hover state',
    },
    href: 'https://wireframes.internet.dev/examples/components/gradient-button',
  },
  {
    description: 'Grid template wireframe',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/969053be-c9a8-4678-8043-e443aab4ecb8.png',
      alt: 'Grid template wireframe',
    },
    href: 'https://wireframes.internet.dev/examples/empty/grid-template-page',
  },
  {
    description: 'marble.place',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/b424905e-fdf4-48b4-81bb-accb5bc0b147.png',
      alt: 'marble.place',
    },
    href: 'https://marble.place/',
  },

  // {
  //   img: {
  //     src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c2efd4d0-64c0-4292-bccd-7a4be63a7370.jpeg',
  //     alt: 'Tool Preview',
  //   },
  //   href: 'https://devtool.com/',
  // },
  // {
  //   img: {
  //     src: 'https://pbs.twimg.com/media/GuJYWpYbYAASTz5?format=jpg&name=medium',
  //     alt: 'Tool Preview',
  //   },
  //   href: 'https://x.com/aalimbuyuguen/status/1937208035644231861',
  // },
  // {
  //   img: {
  //     src: 'https://pbs.twimg.com/media/GlTTnr0a4AAIS68?format=jpg&name=large',
  //     alt: 'Tool Preview',
  //   },
  //   href: 'https://x.com/wwwjim/status/1897374024688451609/photo/1',
  // },

  // {
  //   img: {
  //     src: 'https://pbs.twimg.com/media/GsGegZ1bwAA_7Ec?format=jpg&name=medium',
  //     alt: 'Tool Preview',
  //   },
  //   href: 'https://x.com/aalimbuyuguen/status/1927997032104612000',
  // },

  // {
  //   img: {
  //     src: 'https://pbs.twimg.com/media/GlioFlCakAAyH_t?format=jpg&name=4096x4096',
  //     alt: 'Tool Preview',
  //   },
  //   href: 'https://x.com/ana_piligrim/status/1898452209949638713/photo/1',
  // },
];

export const RESOUCES_WEBSITES_CONTENT = [
  {
    title: 'Sacred Computer',
    description: 'SRCL is an open-source React component and style repository that helps you build web applications, desktop applications, and static websites with terminal aesthetics.',
    label: 'Font',
    img: {
      src: 'https://pbs.twimg.com/media/GhrpI-KacAA8ciq?format=jpg&name=large',
      // src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/2f725068-5cc6-4809-963c-2c88bed3f540.jpeg',
      alt: 'Sacred Computer',
    },
    href: 'https://sacred.computer/',
  },
  {
    title: '144 Northwest Flags',
    description: 'A story about people, craft and friendship. This project is a gathering of kindred souls in the Pacific Northwest—individuals whose dedication to imaginative labor reminds us of what a beautiful world might look like.',

    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/46711e40-1754-4b32-9e9c-52ef1ec68725.png',
      alt: '144 Northwest Flags',
    },
    href: 'https://flagpost.org/',
  },
  {
    title: 'Beautiful Things',
    description: 'The largest index of 3D Things for the Apple Vision Pro.',

    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/bc8d7d6d-72d8-44c8-9a2b-cc610d39be02.png',
      // src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/24/68/a0/2468a030-a1fc-9a05-6f1e-bfd6be3d2cf4/565e02bf-1698-47a4-a253-9ad33fcc1cd0_BT_AppStore_Image_01_Discover2.png/960x540mv.webp',
      alt: 'Beautiful Things',
    },
    href: 'https://www.beautifulthings.xyz/',
  },
  {
    title: 'Minus One Blog',
    description: 'Every great endeavor starts with questions, not answers. It starts at -1, not 0. Founders and technologists join SPC when they are still building conviction in the right idea.',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/80fcd618-6063-4251-84fc-48fb66f774c8.png',
      alt: 'Minus One',
    },
    href: 'https://minusone.southparkcommons.com/',
  },
];

export const RESOUCES_ARTS_AND_CRAFTS = [
  {
    title: 'Anna learns things',
    featured: true,
    lable: 'Artist',
    href: null,
  },
];

export const READING_CONTENT = [
  {
    title: 'On Design',
    items: RESOUCES_DESIGN_READING,
  },
  {
    title: 'On Engineering',
    items: RESOUCES_ENGINEERING_READING,
  },
];

export const RESOUCES_DESIGN = [
  {
    title: 'Design',
    items: RESOUCES_ENGINEERING_READING,
  },
];

export const RESOUCES_ENGINEERING = [
  {
    title: 'Engineering',
    items: RESOUCES_ENGINEERING_READING,
  },
];

export const RESOUCES_COMMUNITY_CONTENT = [
  {
    title: 'Anna Learns Things',
    description: 'Handmade joy.',
    img: {
      src: 'https://annalearnsthings.com/cdn/shop/files/2189A87E-ACEB-4C17-86A6-15CB7D98B6D8.jpg?v=1738789765&width=1206',
      alt: 'Anna Learns Things',
    },
    href: 'https://annalearnsthings.com/?fbclid=PAZXh0bgNhZW0CMTEAAaclXxWFNxUC-Sqaa7C-pI6LueDQNPmfV4QI_NRUhzx1pGLxRwiKcp30GWUIkg_aem_XrVG-6DGBdhz1FM4ZQFmkg',
  },
  {
    title: 'Focused Space',
    description: 'Get structure for your day, support from the focused community, and unique productivity tools — all in one place!',
    img: {
      src: 'https://500.co/_next/image?url=https%3A%2F%2Fstrapi-global-sites.s3.us-east-1.amazonaws.com%2F1_4_e9969b5f11.jpg&w=3840&q=75',
      alt: 'Focused Space',
    },
    href: 'https://www.focused.space/',
  },
  {
    title: 'Trash Club',
    description: 'We make things, together, with Trash.',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/8fcbdcbf-d50b-467a-a3c8-5666686b4a0e.png',
      alt: 'Trash Club',
    },
    href: 'https://www.instagram.com/trash.club/',
  },
  {
    title: 'Mood Room',
    description: 'Cozy game startup for mental wellness.',
    img: {
      src: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c1971e09-33a2-4a62-a05b-0558d85b52fc.png',
      alt: 'Mood Room',
    },
    href: 'https://www.instagram.com/moodroom.me/',
  },
  {
    title: 'Project Gilgamesh',
    description: 'Project Gilgamesh is a game with a rhythm-based infinite runner where you kill a god with parkour.',
    img: {
      src: 'https://img.itch.zone/aW1hZ2UvMjAwNDY2MC8xNTM0MTM1Ni5wbmc=/794x1000/sc9WJ4.png',
      alt: 'Project Gilgamesh',
    },
    href: 'https://sainarayan.itch.io/project-gilgamesh',
  },
  {
    title: 'Pottery Northwest',
    description: 'A nonprofit pottery studio and education center, is located in lower Queen Anne in Seattle (226 1st Avenue N).',
    img: {
      src: 'https://www.historylink.org/Content/Media/Photos/Large/Pottery-by-Clayton-James-at-Pottery-Northwest-Seattle-May-1981.jpg',
      alt: 'Project Gilgamesh',
    },
    href: 'https://sainarayan.itch.io/project-gilgamesh',
  },
  {
    title: 'Elcap.xyz',
    description: 'We build and invest at the collision of technology shifts and behavior change.',
    img: {
      src: 'https://media.licdn.com/dms/image/v2/D5622AQHAKGB83GH1KQ/feedshare-shrink_800/feedshare-shrink_800/0/1722281093554?e=2147483647&v=beta&t=MTxu3HhzwpVYfl4IO7NBQgMSqxKETCFX4cY7W_FtzBw',
      alt: 'Project Gilgamesh',
    },
    href: 'https://elcap.xyz/',
  },
];

export const UPCOMING_EVENTS_CONTENT = [
  {
    title: 'Pottery Northwest: Clay Handbuilding Workshop',
    author: 'Aug 9, 2025',
    img: {
      src: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/oe/5228934f-53d4-4fd4-8be3-431cf1e31074.jpg',
      alt: 'Pottery Northwest: Clay Handbuilding Workshop',
    },
    href: 'https://lu.ma/u8biqjc0',
  },
  {
    title: 'FLAG POST 144 ',
    author: 'Aug 11, 2025',
    img: {
      src: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/oe/5228934f-53d4-4fd4-8be3-431cf1e31074.jpg',
      alt: 'Flag post 144',
    },
    href: 'https://lu.ma/hjqojyum?tk=ziOhuf',
  },
];

export const PAST_EVENTS_CONTENT = [
  {
    title: 'DWeb Seattle Gathering',
    author: 'Jun 2025',
    img: {
      src: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/w9/ad7899a4-925d-4186-bf2e-6fdd6766fdd7.png',
      alt: 'DWeb Seattle Gathering - Jun 2025',
    },
    href: 'https://lu.ma/wfoprjy7',
  },
  {
    title: '1 YEAR OF THE INTERNET DEVELOPMENT STUDIO OFFICE',
    author: 'Jun 2025',
    img: {
      src: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/b8/16c79719-32f2-4e87-a0fc-58f39856d677.jpg',
      alt: '1 YEAR OF THE INTERNET DEVELOPMENT STUDIO OFFICE',
    },
    href: 'https://lu.ma/jnhwlxzk',
  },
  {
    title: 'Computer Game Discussions',
    author: 'May 2025',
    img: {
      src: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/x0/93f2d410-20af-4cde-ae05-75002e13db26.png',
      alt: 'Computer Game Discussions at the Internet Development Studio Company of Seattle, Washington',
    },
    href: 'https://lu.ma/jidfpvkk',
  },
  {
    title: 'Mechanical Keyboard Meetup',
    author: 'Dec 2025',
    img: {
      src: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/x0/93f2d410-20af-4cde-ae05-75002e13db26.png',
      alt: 'Mechanical Keyboard Meetup',
    },
    href: 'https://lu.ma/l8e0pt31',
  },
  {
    title: 'DWeb Seattle Gathering',
    author: 'Feb 2025',
    img: {
      src: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/ac/7ce9dca8-0efb-4314-b17b-74dc258b9689',
      alt: 'DWeb Seattle Social',
    },
    href: 'https://lu.ma/op4fc8ac',
  },
  {
    title: 'DWeb Seattle Social',
    author: 'Nov 2024',
    img: {
      src: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/ac/7ce9dca8-0efb-4314-b17b-74dc258b9689',
      alt: 'DWeb Seattle Social',
    },
    href: 'https://lu.ma/ny799rqe',
  },
  {
    title: 'SEA NET: 1st Edition',
    author: 'Sep 2024',
    img: {
      src: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/x0/93f2d410-20af-4cde-ae05-75002e13db26.png',
      alt: 'SEA NET: 1st Edition',
    },
    href: 'https://lu.ma/75kyx2f8',
  },
  {
    title: "INTDEV Poker: Texas Hold'em",
    author: 'Aug 2024',
    img: {
      src: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/vk/dbf272e2-f488-49e8-ba44-b83db0ed7ba1',
      alt: "INTDEV Poker: Texas Hold'em",
    },
    href: 'https://lu.ma/k3bnanu4',
  },
  {
    title: 'Seattle Design Meetup',
    author: 'Aug 2024',
    img: {
      src: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/bo/be50651c-98db-48c1-a42a-5b76901e119a',
      alt: 'Seattle Design Meetup',
    },
    href: 'https://lu.ma/emm9r4vt',
  },
];

export const RESOUCES_COMMUNITY = [
  {
    title: 'Events',
    isTab: true,
    gridType: GRID_TYPES.GRID_READING_LIST,
    items: [
      {
        title: 'Upcoming',
        items: UPCOMING_EVENTS_CONTENT,
      },
      {
        title: 'Past',
        items: PAST_EVENTS_CONTENT,
      },
    ],
  },
  {
    title: 'Projects & Companies',
    gridType: GRID_TYPES.GRID_LARGE,
    isTab: true,
    items: RESOUCES_COMMUNITY_CONTENT,
  },
];

export const RESOUCES_SIDEBAR_ITEMS: ResourceItem[] = [
  {
    title: 'Reading',
    href: '/resources#mockups',
    gridType: GRID_TYPES.GRID_READING_LIST,
    items: READING_CONTENT,
  },
  {
    title: 'Mood',
    href: '/resources#mood',
    gridType: GRID_TYPES.GRID_LARGE,
    items: RESOUCES_MOOD_GENERAL,
  },
  {
    title: 'Websites',
    href: '/resources#design',
    gridType: GRID_TYPES.GRID_LARGE,
    items: RESOUCES_WEBSITES_CONTENT,
  },
  {
    title: 'Tools',
    href: '/resources#tools',
    gridType: GRID_TYPES.GRID_LARGE,
    items: RESOUCES_TOOLS_CONTENT,
  },
  {
    title: 'Community',
    href: '/resources#websites',
    gridType: GRID_TYPES.GRID_LARGE,
    items: RESOUCES_COMMUNITY,
  },
];
