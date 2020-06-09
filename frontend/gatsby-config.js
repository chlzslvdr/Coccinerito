require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Coccinerito cafè',
    description: 'Playground cafè website',
    author: 'chlzslvdr',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL,
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          'article',
          'category',
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@scss": "src/scss",
          "@templates": "src/templates",
        },
        extensions: [
          "js",
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
  }
  ],
};
