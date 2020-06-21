import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Associations, { Association } from "../components/Associations"
import Heading from "../components/Heading"
import Layout from "../components/Layout"
import Paragraph from "../components/Paragraph"
import Section from "../components/Section"
import SEO from "../components/seo"
import Skills, { Skill } from "../components/Skills"
import VerticalSpacing from "../components/VerticalSpacing"

function AssociationFromJson({ logo, ...node }) {
  return (
    <Association
      logo={(function () {
        if (logo.type === "svg") {
          return {
            type: "component",
            component: require(`../images/${logo.src}`),
          }
        } else {
          return {
            type: "img",
            imgAttributes: {
              alt: "",
              src: require(`../images/${logo.src}`),
            },
          }
        }
      })()}
      {...node}
    />
  )
}

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "home.json" }) {
        childDataJson {
          leadText
          work {
            brandColor
            company
            href
            isFocus
            logo {
              src
              type
            }
            positions {
              time
              title
            }
          }
          skills {
            isFocus
            name
          }
          education {
            brandColor
            company
            href
            isFocus
            logo {
              type
              src
            }
            positions {
              title
              time
            }
          }
        }
      }
    }
  `)

  const { education, leadText, skills, work } = data.file.childDataJson

  return (
    <Layout isHeroHeader heroContent={<Section></Section>}>
      <SEO title="Home" />

      <Section verticalPadding="xxl">
        <Heading element="h1" isCentered type="xl">
          CV
        </Heading>
        <VerticalSpacing size="xl" />

        <article>
          <Heading element="h2" isCentered type="lg">
            Bio
          </Heading>
          <VerticalSpacing size="xl" />
          {leadText.map((text, i) => (
            <Paragraph isLead={i === 0} key={i}>
              {text}
            </Paragraph>
          ))}
        </article>
        <VerticalSpacing size="xxxl" />

        <section>
          <Heading element="h2" isCentered type="lg">
            Work
          </Heading>
          <VerticalSpacing size="xl" />
          <Associations>
            {work.map((node) => (
              <AssociationFromJson key={node.company} {...node} />
            ))}
          </Associations>
        </section>
        <VerticalSpacing size="xxxl" />

        <section>
          <Heading element="h2" isCentered type="lg">
            Skills
          </Heading>
          <VerticalSpacing size="xl" />
          <Skills>
            {skills.map(({ name, isFocus }) => (
              <Skill key={name} isFocus={isFocus || false}>
                {name}
              </Skill>
            ))}
          </Skills>
        </section>
        <VerticalSpacing size="xxxl" />

        <section>
          <Heading element="h2" isCentered type="lg">
            Education
          </Heading>
          <VerticalSpacing size="xl" />
          <Associations>
            {education.map((node) => (
              <AssociationFromJson key={node.company} {...node} />
            ))}
          </Associations>
        </section>
      </Section>
    </Layout>
  )
}
