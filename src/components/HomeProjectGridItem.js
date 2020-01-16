import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./home.module.scss"

const HomeProjectGridItem = ({ project }) => {
  return (
    <div key={project.id} className={styles.projectItem}>
      <div className={styles.bgWrap} />
      <Link to={`${project.fields.slug}`}>
        <div className={styles.projectThumbnailWrapper}>
          <Img
            className={styles.projectThumbnailImage}
            fluid={project.frontmatter.logo.childImageSharp.fluid}
            alt={project.frontmatter.title}
          />
        </div>
      </Link>
    </div>
  )
}

export default HomeProjectGridItem
