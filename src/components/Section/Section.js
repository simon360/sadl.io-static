import PropTypes from "prop-types"
import React from "react"

import { section } from "./Section.module.css"

const Section = ({ children, verticalPadding = "0rem" }) => (
  <div
    className={section}
    style={{
      paddingBottom: verticalPadding,
      paddingTop: verticalPadding,
    }}
  >
    {children}
  </div>
)

Section.propTypes = {
  /**
   * Children to show
   */
  children: PropTypes.node,

  /**
   * The amount of padding to add at the top and bottom. Should be in `rem`s.
   */
  verticalPadding: PropTypes.string,
}

export default Section
