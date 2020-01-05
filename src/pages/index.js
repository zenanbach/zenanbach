import React from "react"

import Layout from "../components/layout"
import HomeHeroImage from "../components/HomeHeroImage"
import ZachHeadshotImage from "../components/ZachHeadshotImage"
import SEO from "../components/seo"
import HomeProjectGridItem from "../components/HomeProjectGridItem"

import styles from "../components/home.module.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1 className={styles.homeTitle}>Zenanbach Creative</h1>
    <p style={{ margin: "0.5em 0em 0" }}>
      A boutique web and mobile app development studio focused on arts,
      wellness, sustainability, and social good
    </p>
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <div className={styles.headShotWrapper}>
        <div className={styles.headshotContainer}>
          <ZachHeadshotImage />
        </div>
      </div>
      <div className={styles.homeImageWrapper}>
        <HomeHeroImage />
      </div>
    </div>
    <h2>What we do</h2>
    <div className={styles.expertise}>
      <div className={styles.item}>
        {
          // Image
          // Title
          // Description
        }
      </div>
    </div>
    <h2>Recent Projects</h2>
    <div className={styles.recentProjects}>
      {data.allMarkdownRemark.edges.map((proj, index) => {
        if (index < 3) {
          return <HomeProjectGridItem key={proj.node.id} project={proj.node} />
        }
      })}
    </div>
  </Layout>
)

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
                fluid(maxWidth: 2048) {
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

export default IndexPage
