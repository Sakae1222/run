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
  siteTitle: "Ray's Motion Journal",
  siteUrl: 'https://motion.arayr.com',
  logo: 'https://arayr.com/pingu-swinging-a-sword.png',
  description: 'Personal site',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://arayr.com',
    },
//    {
//      name: 'About',
//      url: '',
//    },
  ],
};

export default data;
