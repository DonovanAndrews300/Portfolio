import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.scss'
import 'typeface-assistant'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query NotFoundSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Donovan Andrews- Web Developer' },
            { name: 'keywords', content: 'donovan,donovan andrews, web design, front-end web development' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <main className="no-page-content">
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
