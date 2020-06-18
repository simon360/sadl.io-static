import React from "react"
import { ArrowUp, GitHub, Instagram, Linkedin, Twitter } from "react-feather"

import Section from "../Section"
import Surface from "../Surface"
import TextWithIcon from "../TextWithIcon"

import { link, links, wrapper } from "./Footer.module.css"

export default function Footer({
  links: { github, instagram, linkedin, twitter },
}) {
  return (
    <footer>
      <Surface backgroundColorType="brand-primary">
        <Section verticalPadding="lg">
          <div className={wrapper}>
            <span>© {new Date().getFullYear()}</span>
            <ul className={links}>
              <li className={link}>
                <a href={github}>
                  <GitHub />
                </a>
              </li>
              <li className={link}>
                <a href={linkedin}>
                  <Linkedin />
                </a>
              </li>
              <li className={link}>
                <a href={instagram}>
                  <Instagram />
                </a>
              </li>
              <li className={link}>
                <a href={twitter}>
                  <Twitter />
                </a>
              </li>
              <li className={link}>
                <a href="#top">
                  <TextWithIcon iconAlignment="end" icon={ArrowUp}>
                    Top of page
                  </TextWithIcon>
                </a>
              </li>
            </ul>
          </div>
        </Section>
      </Surface>
    </footer>
  )
}
