import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { useMsal } from "@azure/msal-react"
import { useIsAuthenticated } from "@azure/msal-react"

const SignInButton = () => {
  const [user, setUser] = useState([])

  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  const loginRequest = {
    scopes: ["User.Read"],
  }

  const { instance } = useMsal()

  const handleLogin = loginType => {
    instance.loginPopup(loginRequest).catch(e => {
      console.log(e)
    })
  }

  const isAuthenticated = useIsAuthenticated()

  return isAuthenticated ? (
    <h1>Signed in!</h1>
  ) : (
    <button
      onClick={() => {
        console.log("meow")
        handleLogin()
      }}
    >
      Login to Microsoft
    </button>
  )
}

const FunctionTester = () => {
  const isAuthenticated = useIsAuthenticated()

  console.log(isAuthenticated)

  const { instance, accounts, inProgress } = useMsal()
  const [accessToken, setAccessToken] = useState(null)
  const loginRequest = {
    scopes: ["User.Read"],
  }

  const name = accounts[0] && accounts[0].name

  function RequestAccessToken() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    }

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then(response => {
        console.log("hello")
        console.log(response.accessToken)
        console.log(response)
        setAccessToken(response.accessToken)
      })
      .catch(e => {
        console.error(e)
        instance.acquireTokenPopup(request).then(response => {
          setAccessToken(response.accessToken)
        })
      })
  }

  async function TestAPI() {
    const bearer = `Bearer ${accessToken}`

    const options = {
      method: "GET",
      headers: {
        Authorization: bearer,
        "X-ZUMO-AUTH": accessToken,
        "Content-Type": "application/json",
      },
      credentials: "include",
    }

    try {
      const response = await fetch(
        "https://nateisthename-function-app.azurewebsites.net/api/HelloWorld?name=nathan",
        options
      )
      return console.log(await response.json())
    } catch (error) {
      return console.log(error)
    }
  }

  return isAuthenticated ? (
    <div class="row">
      <button onClick={RequestAccessToken}>Click me</button>
      <button onClick={TestAPI} disabled={!accessToken}>
        Test API
      </button>
    </div>
  ) : (
    <h6>Nope</h6>
  )
}

const SigninPage = () => {
  return (
    <Layout>
      <div className="row justify-content-center">
        <div className="col-4">
          <SignInButton />
          <FunctionTester />
        </div>
      </div>
    </Layout>
  )
}
export default SigninPage
