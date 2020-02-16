import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Section from "./Section"

const Header = ({ siteTitle }) => (
  <header>
    <Section>
      <Link to="/">{siteTitle}</Link>
    </Section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
