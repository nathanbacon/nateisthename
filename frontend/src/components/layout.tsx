import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "./layout.scss";
import "purecss/build/pure-min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          githubUrl
          linkedinUrl
          twitterUrl
          howIBuiltThis
        }
      }
    }
  `);

  const socials = [
    data.site.siteMetadata.githubUrl,
    data.site.siteMetadata.linkedinUrl,
    data.site.siteMetadata.twitterUrl,
  ];
  const fgColor = "white";
  const bgColor = "black";

  return (
    <div className="header">
      <div className="pure-menu pure-munu-horizontal pure-menu-fixed">
        <a href="" className="pure-menu-heading">
          nateisthe.name
        </a>
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">
              Home
            </a>
          </li>
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">
              Inquire
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
