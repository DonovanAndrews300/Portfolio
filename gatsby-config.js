module.exports = {
  siteMetadata: {
    title: `Donovan Andrews - Web Developer`,
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-sass',
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-90063956-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Donovan Andrews',
        short_name: 'Don',
        start_url: '/',
        background_color: '#fffdfd',
        theme_color: '#fffdfd',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
