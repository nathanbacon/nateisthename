import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light bg-body-tertiary">
    <div className="container-fluid">
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
    </div>
  </nav>
)

export default Header
