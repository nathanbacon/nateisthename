import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-body-tertiary">
      <div className="container-fluid justify-content-start">
        <Link className="navbar-brand" to="/">
          {siteTitle}
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/inquire/">
              Inquire
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/signin/">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
