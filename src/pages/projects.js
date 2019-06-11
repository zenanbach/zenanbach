import React from "react"
//import { Link } from "gatsby"
import styles from "../components/projects.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = () => {
  return (
    <Layout>
      <article className={styles.projects}>
        <SEO title="Projects" />
        <h1>Projects</h1>
        <section className={styles["project-grid"]}>
          This is the projects grid!
        </section>
      </article>
    </Layout>
  )
}

export default projects
