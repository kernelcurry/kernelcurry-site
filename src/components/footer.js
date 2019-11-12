import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SitePageQuery {
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `)

  return (
    <footer id="footer">
      <nav>
        <ul>
          <li><span>KernelCurry</span></li>
          {data.allSitePage.edges.map(({ node }) => {
          const { path } = node
          const title = path
          return (
            <li key={path}>
              <Link to={path}>{title}</Link>
            </li>
          )
        })}
        </ul>
      </nav>
      <p>KernelCurry &copy; <a href="http://curryisms.com/" target="_blank" rel="nofollow noopener noreferrer">Copywrite</a> {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer


// {{ $currentPage := . }} {{ range .Site.Menus.main }}
// <li><a href="{{ .URL }}" {{if  $currentPage.IsMenuCurrent "main" . }} class="active"{{end}}>{{ .Name }}</a></li>
// {{end}}