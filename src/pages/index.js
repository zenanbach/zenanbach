import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faJs,
  faHtml5,
  faReact,
  faCss3Alt,
  faNode,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import HomeHeroImage from "../components/HomeHeroImage"
import ZachHeadshotImage from "../components/ZachHeadshotImage"
import SEO from "../components/seo"
import HomeProjectGridItem from "../components/HomeProjectGridItem"

import styles from "../components/home.module.scss"

const IndexPage = ({ data }) => {
  const featuredProjects = data.allMarkdownRemark.edges.filter(
    proj => proj.node.frontmatter.featured
  )
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className={styles.homeTitle}>Zenanbach Creative</h1>
      <p style={{ margin: "0.5em 0em 1.5em", fontSize: "1.2em" }}>
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
      <h2 className={styles["expertise-header"]}>Things I like to work on</h2>
      <div className={styles.expertise}>
        <div className={styles.item}>
          <FontAwesomeIcon
            className={styles.reactIcon}
            icon={faReact}
            size="8x"
            spin
          />
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon className={styles.jsIcon} icon={faJs} size="6x" />
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon
            className={styles.nodeIcon}
            icon={faNode}
            size="6x"
          />
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon
            className={styles.htmlIcon}
            icon={faHtml5}
            size="6x"
          />
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon
            className={styles.cssIcon}
            icon={faCss3Alt}
            size="6x"
          />
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon
            className={styles.wordpressIcon}
            icon={faWordpress}
            size="6x"
          />
        </div>
        {
          // Image
          // Title
          // Description
        }
      </div>
      <h2 className={styles["projects-header"]}>Recent Projects</h2>
      <div className={styles.recentProjects}>
        {featuredProjects.map(proj => (
          <HomeProjectGridItem key={proj.node.id} project={proj.node} />
        ))}
      </div>
      <Link to="/projects/">
        <h2>View all projects</h2>
      </Link>
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
            featured
            logo {
              childImageSharp {
                fluid(maxWidth: 2048) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
