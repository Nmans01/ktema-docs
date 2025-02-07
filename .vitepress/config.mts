import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KtemaWiki",
  description: "Documentation for KtemaLife, your all-in-one property management system.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'For Property Managers', link: '/markdown-examples' },
      { text: 'For Contractors', link: '/markdown-examples' },
      { text: 'For Tenants', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'For Property Managers',
        base: "/property-manager",
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Apartments/Commercial Units', link: '/api-examples' },
          { text: 'Onboarding Tenants', link: '/api-examples' },
          { text: 'Collecting Rent', link: '/api-examples' },
          { text: 'Listings & Applications', link: '/api-examples' },
          { text: 'Parking Lots', link: '/api-examples' },
          { text: 'Work Orders', link: '/api-examples' },          
          { text: 'Your Team', link: '/api-examples' },
        ]
      },
      {
        text: 'For Contractors',
        base: "/contractors",
        collapsed: true,
        items: [
          { text: 'Getting Started', link: '/getting-started/contractor' },
          { text: 'Work Orders', link: '/api-examples' },          
        ]
      },
      {
        text: 'For Tenants',
        base: "/tenants",
        collapsed: true,
        items: [
          { text: 'Getting Started', link: '/getting-started/tenant' },
          { text: 'Onboarding', link: '/api-examples' },
          { text: 'Listings & Applications', link: '/api-examples' },
          { text: 'Paying Rent', link: '/api-examples' },
          { text: 'Moving Out', link: '/api-examples' },
          { text: 'Parking', link: '/api-examples' },
        ]
      },
      {
        text: 'Miscellaneous',
        items: [
          { text: 'Getting Support', link: '/getting-started/tenant' },
          { text: 'Reporting Bugs & Issues', link: '/api-examples' },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
