import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteHeaderQuery {
      site {
        siteMetadata {
          navigation {
            main {
              text
              path
            }
          }
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `);
  const nav = data.site.siteMetadata.navigation;
  const social = data.site.siteMetadata.social;

  return (
    <header>
      <div className="show-sm">
        <div id="nav-toggle-box">
          <div id="nav-toggle-brand">
            <Link to="/">KernelCurry</Link>
          </div>
          <a
            data-component="toggleme"
            data-target="#top"
            href="#"
            id="nav-toggle"
          >
            <i className="kube-menu"></i>
          </a>
        </div>
      </div>
      <div className="hide-sm" id="top">
        <div id="top-brand">
          <a href="/" title="home">
            KernelCurry
          </a>
        </div>
        <nav id="top-nav-main">
          <ul>
            {nav.main.map(({ text, path }) => {
              return (
                <li key={path}>
                  <Link to={path}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav id="top-nav-extra">
          <ul>
            <li>
              <a href="unknown" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-rss"></i>
                <span className="show-sm">RSS Feed</span>
              </a>
            </li>
            <li>
              <a
                className="social"
                href={"https://twitter.com/" + social.twitter}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-twitter"></i>
                <span className="show-sm">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href={"https://github.com/" + social.github}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github"></i>
                <span className="show-sm">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href={"https://www.linkedin.com/in/" + social.linkedin}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
                <span className="show-sm">LinkedIn</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// {{ $currentPage := . }}
// {{ range .Site.Menus.main }}
// <li><a href="{{ .URL }}" {{if  $currentPage.IsMenuCurrent "main" . }} class="active"{{end}}>{{ .Name }}</a></li>
// {{end}}
