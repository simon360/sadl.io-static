import React from "react"
import classnames from "class-names"

import Heading from "../Heading"
import VerticalSpacing from "../VerticalSpacing"

import {
  isFocus,
  logo,
  logoWrapper,
  position,
  positionsWrapper,
  wrapper,
} from "./Job.module.css"

export default function Job({
  company,
  brandColor,
  isFocus: isFocusProp,
  positions,
  logo: { type: logoType, src: logoSrc },
}) {
  return (
    <li
      className={classnames(wrapper, { [isFocus]: isFocusProp })}
      style={{ borderColor: brandColor }}
    >
      <div>
        <Heading element="h2" type="md">
          {company}
        </Heading>
        <VerticalSpacing size="sm" />

        <ul className={positionsWrapper}>
          {positions.map(({ time, title }) => (
            <li key={time} className={position}>
              <strong>{title}</strong>, {time}
            </li>
          ))}
        </ul>
      </div>

      <div className={logoWrapper}>
        {logoType &&
          logoSrc &&
          (function () {
            if (logoType === "raster") {
              return (
                <img
                  className={logo}
                  src={require(`../../images/${logoSrc}`)}
                />
              )
            } else {
              const Logo = require(`../../images/${logoSrc}`)
              return <Logo className={logo} />
            }
          })()}
      </div>
    </li>
  )
}
