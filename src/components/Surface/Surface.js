import PropTypes from "prop-types"
import React from "react"

import classnames from "class-names"

import { brandPrimary, light, muted } from "./Surface.module.css"

const darkColors = ["brand-primary"]

const Surface = ({ backgroundColorType, children }) => (
  <div
    className={classnames({
      [brandPrimary]: backgroundColorType === "brand-primary",
      [light]: backgroundColorType === "light",
      [muted]: backgroundColorType === "muted",
      DarkSurface: darkColors.includes(backgroundColorType),
    })}
  >
    {children}
  </div>
)

Surface.propTypes = {
  /**
   * The type of color to use as a background.
   */
  backgroundColorType: PropTypes.oneOf(["light", "brand-primary", "muted"]),

  /**
   * Children to render.
   */
  children: PropTypes.node,
}

export default Surface
