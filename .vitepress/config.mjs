import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Akka Documentation",
  description: "Documentation for the headless Wordpress stack Akka, developed by Äventyret.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' },
      { text: 'Wordpress plugin', link: '/plugin' },
      { text: 'Theme development', link: '/theme' },
      { text: 'JS Modules', link: '/modules' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Overview', link: '/overview' }
        ]
      },
      {
        text: 'Wordpress plugin',
        items: [
          { text: 'Plugin', link: '/plugin' }
        ]
      },
      {
        text: 'Theme development',
        items: [
          { text: 'Theme', link: '/theme' }
        ]
      },
      {
        text: 'JS Modules',
        items: [
          { text: 'JS Modules', link: '/modules' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aventyret/akka-headless-wp' }
    ]
  }
})
