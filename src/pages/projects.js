import React from "react"
import { graphql, Link } from "gatsby"
import styles from "./projects.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <article className={styles.projects}>
        <SEO title="Projects" />
        <h1>Projects</h1>
        <section className={styles.projectGrid}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div key={node.id} className={styles.project}>
                <Link to={`/${node.fields.slug}/`}>
                  {node.frontmatter.featuredImage ? (
                    <img
                      src={require(`../images/${
                        node.frontmatter.featuredImage
                      }`)}
                      alt={node.frontmatter.title}
                    />
                  ) : (
                    ""
                  )}
                </Link>
                <h2>{node.frontmatter.title}</h2>
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
            featuredImage
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
