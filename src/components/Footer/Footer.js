import React from "react"

import Section from "../Section"
import Surface from "../Surface"

export default function Footer() {
  return (
    <footer>
      <Surface backgroundColorType="brand-primary">
        <Section verticalPadding="lg">© {new Date().getFullYear()}</Section>
      </Surface>
    </footer>
  )
}
