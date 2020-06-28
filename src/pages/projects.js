import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./projects.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = ({ data }) => {
  return (
    <Layout>
      <article className={styles.projects}>
        <SEO title="Projects" />
        <h1>Projects</h1>
        <section className={styles.projectGrid}>
          {data.allMarkdownRemark.edges.map(({ node }, i) => {
            return (
              <div key={i} className={styles.col}>
                <div key={node.id} className={styles.project}>
                  <Link to={node.fields.slug}>
                    <Img
                      fluid={node.frontmatter.logo.childImageSharp.fluid}
                      alt={node.frontmatter.title}
                    />
                  </Link>
                </div>
              </div>
            )
          })}
        </section>
      </article>
      <article className={styles.collabs} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            url
            logo {
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
