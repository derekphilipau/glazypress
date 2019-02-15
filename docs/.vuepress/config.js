module.exports = {
  // base: '/glazypress/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Glazy Help',
      description: 'The Free, Open-Source Ceramics Library'
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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/about/#contacting-glazy' },
      { text: 'Donate', link: '/support#how-to-support-glazy' },
      { text: 'Glazy.org', link: 'https://glazy.org' },
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'Support Glazy',
        collapsible: false,
        children: [
          'support'
        ]
      },
      {
        title: 'About',
        collapsible: true,
        children: [
          '/about/',
          '/about/releases',
          '/about/health-warning',
          '/about/privacy',
          '/about/terms-of-service'
        ]
      },
      {
        title: 'Video Tutorials',
        collapsible: false,
        children: [
          'tutorials'
        ]
      },
      {
        title: 'Ceramics Concepts',
        collapsible: true,
        children: [
          '/concepts/analysis/',
          '/concepts/calculation/',
          '/concepts/firing/',
          '/concepts/temperature/',
          '/concepts/limits/'
        ]
      },
      {
        title: 'Glazy Guide',
        collapsible: true,
        children: [
          '/guide/',
          '/guide/oxides/',
          '/guide/materials/',
          '/guide/inventory/',
          '/guide/calculator/',
          '/guide/recipes/',
          '/guide/recipes/searching'
        ]
      },
      {
        title: 'Testing Recipes',
        collapsible: true,
        children: [
          '/testing/mixing-tests/',
          '/testing/blending/'
        ]
      },
      {
        title: 'Tools',
        collapsible: true,
        children: [
          '/tools/web-search'
        ]
      }
    ]
  }
}
