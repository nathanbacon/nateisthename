module.exports = {
  siteMetadata: {
    siteUrl: "https://www.nateisthe.name",
    title: "nateisthe.name",
    githubUrl: "https://github.com/nathanbacon",
    linkedinUrl: "https://www.linkedin.com/in/nathan-gelman-949720117/",
    twitterUrl: "https://twitter.com/nathan_gelman",
    howIBuiltThis: "https://github.com/nathanbacon/nateisthename",
    googleSheetsCharts: {
      weeklyGroceryUrl:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfBQUQNwUlkdIMkHsE-RUc-6J0CEzzuss5_plar2M9TjM2Zs1ce-lO7-1YK9ex6WmGxejunlVs0Pgn/pubchart?oid=1486904370&amp;format=interactive",
      eatingOutUrl:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfBQUQNwUlkdIMkHsE-RUc-6J0CEzzuss5_plar2M9TjM2Zs1ce-lO7-1YK9ex6WmGxejunlVs0Pgn/pubchart?oid=1055922425&amp;format=interactive",
    },
    reviewsGoogleEndpoint:
      "https://script.googleusercontent.com/macros/echo?user_content_key=lMNsHqzXJTBsl-VK710UG7t269PoOPc7AtjPB4H_XciCmrOSaFchpbvFeNSON4jp9XCXkHRPPQdN59m17CceBHOXTMyAlZUSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDj4w06iYiWAYeIOTgSXOE37I1OiCgfsJHzRA6M0GrpvN43GWtptE3qm7d1aiFLX4uoEnTkAiFCwGqhSWxjIGPkVXGiG215XUdz9Jw9Md8uu&lib=MwX80f0rhcJvQDjdBEqy8unJgi1kUV1l7",
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
