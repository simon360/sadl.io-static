/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "normalize.css"

import Footer from "../Footer"
import Header from "../Header"
import Hero from "../Hero"
import Paragraph from "../Paragraph"
import "../../theme/index.css"

import { content, wrapper } from "./Layout.module.css"

const Layout = ({ children, heroContent, isHeroHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      file(relativePath: { eq: "hero-london-2.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 1024, maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title

          siteLinks {
            title
            url
          }

          socialLinks {
            title
            url
            type
          }
        }
      }
    }
  `)

  return (
    <div className={wrapper}>
      {/* Add a target for the Return To Top link */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */}
      <a id="top" />

      {isHeroHeader && (
        <Hero
          background={
            <Img
              fluid={data.file.childImageSharp.fluid}
              style={{ height: "100%" }}
            />
          }
        >
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteLinks={data.site.siteMetadata.siteLinks}
            socialLinks={data.site.siteMetadata.socialLinks}
          />
          {heroContent}
        </Hero>
      )}

      {!isHeroHeader && (
        <Header
          socialLinks={data.site.siteMetadata.socialLinks}
          siteLinks={data.site.siteMetadata.siteLinks}
          siteTitle={data.site.siteMetadata.title}
        />
      )}

      <main className={content}>{children}</main>

      <Footer
        contactInfo={
          <Paragraph>
            You can get in touch with me at{" "}
            <a href="mailto:hello@sadl.io">hello@sadl.io</a>, or via my social
            media profiles. I am not currently looking for new work.
          </Paragraph>
        }
        socialLinks={data.site.siteMetadata.socialLinks}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHeroHeader: PropTypes.bool.isRequired,
}

export default Layout
