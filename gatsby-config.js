module.exports = {
  pathPrefix: "/sadl.io-static",
  siteMetadata: {
    title: `Simon Andrews`,
    description: `Engineering Manager/Product Engineer based in London, UK`,
    author: `@simon360`,
    baseUrl: process.env.BASE_URL || "https://simonandrews.ca",

    siteLinks: [{ title: "CV", url: "/" }],
    socialLinks: [
      {
        title: "simon360 on GitHub",
        type: "github",
        url: "https://www.github.com/simon360",
      },
      {
        title: "simon360 on Instagram",
        type: "instagram",
        url: "https://www.instagram.com/simon360",
      },
      {
        title: "sadl-uk on LinkedIn",
        type: "linkedin",
        url: "https://www.linkedin.com/in/sadl-uk/",
      },
      {
        title: "@simon360 on Twitter",
        type: "twitter",
        url: "https://www.twitter.com/simon360",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter:400,700"],
        },
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simon Andrews`,
        short_name: `Simon A`,
        start_url: `/`,
        background_color: `#592695`,
        theme_color: `#592695`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
