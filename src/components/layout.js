import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SocialIcon } from "react-social-icons";
import "./layout.scss";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          githubUrl
          linkedinUrl
          twitterUrl
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
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              <h3 id="site-title">{data.site.siteMetadata.title}</h3>
            </li>
            <li>
              <div className="nate-verticalBarContainer">
                <div className="nate-verticalBar"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="socials top-bar-right">
          <ul className="menu">
            {socials.map((url) => (
              <li>
                <SocialIcon url={url} bgColor={bgColor} fgColor={fgColor} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}

/*
<nav>
          <a href="#">
            <span>Home</span>
          </a>
        </nav>
        */
