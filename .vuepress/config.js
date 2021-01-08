module.exports = {
    title: "Guest Post App",
    description: "Guest Post App Documentation",
    base: '/',

    head: [
        [
            'link',
            {
                href:
                    'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i',
                rel: 'stylesheet',
                type: 'text/css',
            },
        ],
    ],

    themeConfig: {
        logo: '/assets/img/logo.png',
        displayAllHeaders: true,
        activeHeaderLinks: false,
        searchPlaceholder: 'Press / to search',
        lastUpdated: false, // string | boolean
        sidebarDepth: 0,

        repo: '',

        docsRepo: 'phuclh/guestpost-docs',
        editLinks: true,
        editLinkText: 'Help us improve this page!',

        nav: [
            {text: 'Home', link: 'https://guestpost.app/', target: '_self'},
            {
                text: "Language",
                link: "/",
                items: [{text: "English", link: "/en/"}, {text: "Vietnamese", link: "/vi/"}]
            }
        ],

        sidebar: {
            '/vi/': require('./vi'),
            '/en/': require('./en')
        },
    },
}
