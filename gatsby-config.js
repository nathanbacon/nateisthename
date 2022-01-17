module.exports = {
  siteMetadata: {
    siteUrl: "https://www.nateisthe.name",
    title: "nateisthe.name",
    githubUrl: "https://github.com/nathanbacon",
    linkedinUrl: "https://www.linkedin.com/in/nathan-gelman-949720117/",
    twitterUrl: "https://twitter.com/nathan_gelman",
    howIBuiltThis: "https://github.com/nathanbacon/nateisthename",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: "nateisthe.name",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "nateisthe.name",
        short_name: "nateisthe.name",
        start_url: "/",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
  ],
};
