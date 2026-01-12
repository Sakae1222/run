interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Motion Journal',
  siteUrl: 'https://motion.arayr.com',
  logo: 'https://arayr.com/pingu-swinging-a-sword.png',
  description: 'Tracking my journey through sports and training',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://arayr.com',
    },
    {
      name: 'About',
      url: '${getBasePath()}/about.html',
    },
  ],
};

export default data;
