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

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://run.dongbocun.top',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Running Page',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://dongbocun.top',
    },
    {
      name: 'About',
      url: 'https://dongbocun.top/about',
    },
  ],
};

export default data;
