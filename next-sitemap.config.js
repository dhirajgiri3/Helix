/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://helix.cyperstudio.in',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://helix.cyperstudio.in/sitemap-0.xml'],
  },
};
