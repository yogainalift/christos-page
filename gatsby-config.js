module.exports = {
  siteMetadata: {
    title: `Christos`,
    description: `Christos Tselepidas personal page`,
    author: `Christos Tselepidas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `christos-page`,
        short_name: `christos`,
        start_url: `/`,
        background_color: `#0067cc`,
        theme_color: `#0067cc`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
