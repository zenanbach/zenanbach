import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./projects.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

function groupProjectsByTwo(projects) {
  return Array(Math.ceil(projects.length / 3))
    .fill()
    .map((_, i) => {
      return projects.slice(i * 3, i * 3 + 3)
    })
}

const projects = ({ data }) => {
  const proj = groupProjectsByTwo(data.allMarkdownRemark.edges)
  return (
    <Layout>
      <article className={styles.projects}>
        <SEO title="Projects" />
        <h1>Projects</h1>
        <section className={styles.projectGrid}>
          {proj.map((p, i) => {
            return (
              <div key={i} className={styles.projectRow}>
                {p.map(({ node }) => {
                  return (
                    <div key={node.id} className={styles.project}>
                      <Link to={`${node.fields.slug}`}>
                        <Img
                          fluid={
                            node.frontmatter.featuredImage.childImageSharp.fluid
                          }
                          alt={node.frontmatter.title}
                        />
                      </Link>
                      <h2>{node.frontmatter.title}</h2>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            url
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 70000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default projects
