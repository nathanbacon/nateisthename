import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
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
              <ul className="top-bar-links">
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/reviews">Kanji Reviews</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="socials top-bar-right">
          <ul className="menu">
            {socials.map((url) => (
              <li key={url}>
                <SocialIcon url={url} bgColor={bgColor} fgColor={fgColor} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <main>{children}</main>

      <footer>
        <div>
          <a href={data.site.siteMetadata.howIBuiltThis}>
            How I built this site
          </a>
        </div>
      </footer>
    </div>
  );
}
