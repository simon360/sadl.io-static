import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Section from "../Section"
import Surface from "../Surface"

import { title } from "./Header.module.css"

const Header = ({ siteTitle }) => (
  <header>
    <Surface backgroundColorType="brand-primary">
      <Section verticalPadding="1rem">
        <Link className={title} to="/">
          {siteTitle}
        </Link>
      </Section>
    </Surface>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
