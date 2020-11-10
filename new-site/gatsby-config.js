module.exports = {
  siteMetadata: {
    title: `EJC Technology `,
    description: `EJC Technology is a startup tech company, based in Cape Town and Luanda that was founded in May 2018 by Angolan Eurico Catumbela. The company has a specific focus on software development, including web applications and mobile applications. The organisation continues to grow and is improving its footprint on the African continent as an innovator’s app development company. Most of our clients are entrepreneurs and innovators who are executing on an idea they believe in. We are fueled by and appreciate the trust our clients place in us, and we thrive on seeing them succeed. Our Team is formed by engineering students mostly from Angola residing in the Republic of South Africa. Our mission as entrepreneurs is to deliver great service and give opportunity for startups like us to start their own ventures. `,
    author: `@eurico`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
