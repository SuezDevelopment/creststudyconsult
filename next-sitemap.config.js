/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.creststudyconsult.com',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/_not-found'],
    additionalPaths: async (config) => [
        await config.transform(config, '/'),
        await config.transform(config, '/services'),
        await config.transform(config, '/contact'),
        await config.transform(config, '/faq'),
    ],
    transform: async (config, path) => {
        // Custom priority based on page importance
        let priority = 0.7;
        let changefreq = 'weekly';

        if (path === '/') {
            priority = 1.0;
            changefreq = 'daily';
        } else if (path === '/services') {
            priority = 0.9;
            changefreq = 'weekly';
        } else if (path === '/contact') {
            priority = 0.8;
            changefreq = 'monthly';
        } else if (path === '/faq') {
            priority = 0.6;
            changefreq = 'monthly';
        }

        return {
            loc: path,
            changefreq,
            priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        };
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: '*',
                disallow: '/_not-found',
            },
        ],
        additionalSitemaps: [
            'https://creststudyconsult.com/sitemap.xml',
        ],
    },
};
