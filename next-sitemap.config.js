/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://helix.cyper.studio',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://helix.cyper.studio/sitemap-0.xml'],
  },
};
