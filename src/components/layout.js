import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "./layout.scss";
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
    <div className="root">
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              <h3 id="site-title">{data.site.siteMetadata.title}</h3>
            </li>
            <li>
              <div className="verticalBarContainer">
                <div className="verticalBar"></div>
              </div>
            </li>
            <li>
              <ul className="top-bar-links"></ul>
            </li>
          </ul>
        </div>
        <div className="socials top-bar-right">
          <ul className="menu">
            <li>
              <a href={data.site.siteMetadata.githubUrl}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <main>{children}</main>

      <footer>
        <div>
          <a href={data.site.siteMetadata.howIBuiltThis}>
            <h2>How I built this site</h2>
          </a>
        </div>
      </footer>
    </div>
  );
}
