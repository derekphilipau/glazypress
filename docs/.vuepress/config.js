module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Glazy Help',
      description: 'The Free & Open Ceramics Library'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/icons/apple-touch-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    logo: '/img/logo.png',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Support', link: '/support#how-to-support-glazy' },
      { text: 'Glazy.org', link: 'https://glazy.org' },
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'Support',
        path: 'support',
        collapsible: true
      },
      {
        title: 'About',
        collapsible: true,
        children: [
          '/about/',
          '/about/changelog',
          '/about/health-warning',
          '/about/health-carty',
          '/about/privacy',
          '/about/terms-of-service'
        ]
      },
      {
        title: 'Guide',
        collapsible: true,
        children: [
          '/guide/',
          '/guide/materials/',
          '/guide/inventory/',
          '/guide/recipes/',
          '/guide/calculator/',
          '/guide/searching/',
          '/guide/organizing/',
          '/guide/posts/'
        ]
      },
      /*
      {
        title: 'Recipe Types',
        collapsible: true,
        children: [
          '/types/glazes/clear/',
          '/types/glazes/red/'
        ]
      },
      */
      {
        title: 'Concepts',
        collapsible: true,
        children: [
          '/concepts/analysis/',
          '/concepts/analysis/percent',
          '/concepts/analysis/formula',
          '/concepts/analysis/umf',
          '/concepts/calculation/',
          '/concepts/firing/',
          '/concepts/temperature/',
          '/concepts/limits/'
        ]
      },
      {
        title: 'Testing',
        collapsible: true,
        children: [
          '/testing/mixing-tests/',
          '/testing/blending/',
          '/testing/triaxials/',
          '/testing/blending-guides/'
        ]
      },
      {
        title: 'Tutorials',
        path: 'tutorials',
        collapsible: true,
      },
      {
        title: 'Tools',
        collapsible: true,
        children: [
          '/tools/'
        ]
      }
    ]
  }
}
