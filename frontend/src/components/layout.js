import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { PublicClientApplication } from "@azure/msal-browser"
import { MsalProvider } from "@azure/msal-react"
import Header from "./header"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          googleClientId
          clientId
          tenantId
          redirectUri
        }
      }
    }
  `)

  const msalConfig = {
    auth: {
      clientId: data.site.siteMetadata.clientId,
      authority: `https://login.microsoftonline.com/${data.site.siteMetadata.tenantId}`, // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: data.site.siteMetadata.redirectUri,
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
  }

  console.log(msalConfig)

  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
  }

  const msalInstance = new PublicClientApplication(msalConfig)

  return (
    <MsalProvider instance={msalInstance}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container">{children}</div>
    </MsalProvider>
  )
}

export default Layout

/*

*/
