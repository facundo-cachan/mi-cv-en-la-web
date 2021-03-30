const path = require(`path`);
require(`dotenv`).config({ path: `.env` });
module.exports = {
  siteMetadata: {
    title: `Facundo Cachan, desarrollo de software`,
    description: `Everyone needs their own little spot on the interwebs, and this is mine. Welcome to my resume, on the web!`,
    author: `Facundo Cachan`,
    siteUrl: `https://facundo-cachan.com`,
    phone: `541151110483`,
    email: `yo@facundo-cachan.com`,
  },
  plugins: [
    `gatsby-plugin-minify-html`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://facundo-cachan.com`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://facundo-cachan.com`,
        sitemap: `https://facundo-cachan.com/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Facundo Cachan, desarrollo web`,
        short_name: `Mi CV`,
        start_url: `https://facundo-cachan.com`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `./static//images/icon.png`,
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`**/*`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fira Sans:400,600`],
        display: `swap`,
      },
    },
    /*
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        access_token: process.env.DRIBBBLE_TOKEN,
      },
    },
    */
    `gatsby-plugin-stylus`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /*
    {
      resolve: `gatsby-source-dev`,
      options: {
        username: `facundocachan`,
      },
    },
    */
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `6206279437`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: path.join(__dirname, `src`, `markdown`),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: process.env.CRISP_WEBSITE_ID,
        enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    }
  ],
};
