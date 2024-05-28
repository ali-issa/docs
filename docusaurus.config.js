// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;
const isGithubPagesEnv = process.env.GITHUB_PAGES_ENV === 'true';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Fleetbase',
    tagline: 'Modular logistics and supply chain operating system (LSOS)',
    favicon: 'img/fleetbase-icon.png',

    // Set the production url of your site here
    url: 'https://fleetbase.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    // baseUrl: isGithubPagesEnv ? '/docs/' : '/',
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'fleetbase', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    deploymentBranch: 'gh-pages',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/fleetbase/docs/blob/main/sidebars.js',
                    routeBasePath: '/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/fleetbase/docs/tree/main/blog',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    plugins: [
        [
            '@scalar/docusaurus',
            {
                label: 'API Reference',
                route: '/api',
                configuration: {},
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/fleetbase_icon.png',
            navbar: {
                title: 'Fleetbase',
                logo: {
                    alt: 'Fleetbase',
                    src: 'img/fleetbase_icon.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'introduction',
                        position: 'left',
                        label: 'Docs',
                    },
                    { href: 'https://fleetbase.github.io/api-reference', label: 'API Reference', position: 'left' },
                    { href: 'https://discord.gg/V39d5X9z', label: 'Community', position: 'left' },
                    {
                        href: 'https://github.com/fleetbase/fleetbase',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Product',
                        items: [
                            {
                                label: 'Cloud',
                                href: 'https://console.fleetbase.io',
                            },
                            {
                                label: 'Open Source',
                                href: 'https://github.com/fleetbase/fleetbase',
                            },
                            {
                                label: 'Use Cases',
                                href: 'https://github.com/fleetbase/fleetbase#-use-cases',
                            },
                            {
                                label: 'Pricing',
                                href: 'https://www.fleetbase.io/pricing',
                            },
                        ],
                    },
                    {
                        title: 'Learn',
                        items: [
                            // {
                            //     label: 'Guides',
                            //     href: '/category/guides',
                            // },
                            {
                                label: 'API Reference',
                                href: 'https://fleetbase.github.io/api-reference/',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/V39d5X9z',
                            },
                            {
                                label: 'Github',
                                href: 'https://github.com/fleetbase',
                            },
                        ],
                    },
                    {
                        title: 'Apps',
                        items: [
                            {
                                label: 'Storefront App',
                                href: 'https://github.com/fleetbase/storefront-app',
                            },
                            {
                                label: 'Navigator App',
                                href: 'https://github.com/fleetbase/navigator-app',
                            },
                        ],
                    },
                    {
                        title: 'Social',
                        items: [
                            {
                                label: 'Blog',
                                href: 'https://www.fleetbase.io/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/fleetbase',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/fleetbase_io',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Fleetbase`,
            },
            prism: {
                additionalLanguages: ['bash', 'diff', 'json', 'php', 'javascript'],
                theme: lightTheme,
                darkTheme: darkTheme,
            },
        }),
};

module.exports = config;
