/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `nateisthe.name`,
    description: `Nathan Gelman`,
    author: `nathanbacon`,
    googleClientId: process.env.GOOGLE_CLIENT_ID || "none",
    clientId: "8a79fbaa-fe27-407c-87ff-27e7b8043e1b",
    tenantId: "e265bc6e-0f2c-4bdb-9a47-b395babc8808",
    redirectUri: "http://localhost:8000",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nateisthe.name`,
        short_name: `nate`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
