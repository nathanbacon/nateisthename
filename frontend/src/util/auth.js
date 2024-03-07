export const handleLogin = googleUser => {
  window.localStorage.setItem("googleUser", JSON.stringify(googleUser))
}

export const isLoggedIn = () => {
  return !!window.localStorage.getItem("googleUser")
}

export const logout = () => {
  window.localStorage.setItem("googleUser", "")
}
