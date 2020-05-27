import React from "react"

import Section from "../Section"
import Surface from "../Surface"

export default function Footer() {
  return (
    <footer>
      <Surface backgroundColorType="muted">
        <Section verticalPadding="1.0rem">© {new Date().getFullYear()}</Section>
      </Surface>
    </footer>
  )
}
