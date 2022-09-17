module.exports = {
  siteMetadata: {
    title: `itsmeYAW`,
    author: {
      name: `Yudhistira Wibowo`,
      summary: `Just another tech geek.`,
    },
    description: `A website and blog to write my thought.`,
    siteUrl: `https://itsmeyaw.id`,
    social: {
      twitter: `itsmeyaw_id`,
      instagram: `itsmeyaw.id`,
      linkedin: `itsmeyaw`,
      orcid: `0000-0001-9065-2114`,
      github: `itsmeyaw`
    },
    postsPerPage: 5,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yudhistira Wibowo`,
        short_name: `itsmeYAW`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#1C1C1C`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
