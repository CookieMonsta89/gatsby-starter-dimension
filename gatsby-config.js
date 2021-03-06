module.exports = {
  siteMetadata: {
    title: "Web Developer Portfolio",
    author: "Joseph Stanfield",
    description: "A Web Developers Portfolio"
  },
  plugins: [
    'gatsby-plugin-react-helmet',  
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-135526144-1",
      },},  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },      
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
