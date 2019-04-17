import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'

import './layout.scss'
import 'typeface-assistant'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
            { name: 'description', content: 'A front-end web developer based in Seattle. I enjoy crafting digital experiences through code & design.' },
            { name: 'keywords', content: 'katherine kato, web design, front-end web development' },
          ]}
        >
        <meta property="og:image" content="src/images/thumbnail_photo.png" /> 
          <meta property="og:title" content="Donovan Andrews-Web Developer."/>
          <meta property="og:description" content="Web developer based in Ann Arbor,MI"/>
          <meta property="og:url" content="https://donovanandrews.net/"></meta>
          <html lang="en" />
        </Helmet>
        <Header />
        <main className="page-content">
          {children}
        </main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
