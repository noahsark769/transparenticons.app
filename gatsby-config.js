module.exports = {
  siteMetadata: {
    title: `Transparent App Icons`,
    description: ``,
    author: `@TransparentIcns`,
    siteUrl: `https://transparenticons.app`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-styled-components`
  ],
}
