import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        {siteTitle}
      </a>

      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">
            Inquire
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
