module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Glazy Documentation',
      description: 'Glazy Documentation'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/img/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/img/icons/apple-touch-icon-144x144.png` }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Glazy.org', link: 'https://glazy.org' },
    ],
    sidebar: [
      {
        title: 'About Glazy',
        collapsible: true,
        children: [
          '/about/',
          '/about/support',
          '/about/releases',
          '/about/health-warning',
          '/about/privacy',
          '/about/terms-of-service'
        ]
      },
      {
        title: 'How to Use Glazy',
        children: [ /* ... */ ]
      }
    ]
  }
}
