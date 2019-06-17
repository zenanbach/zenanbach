import React from "react"
import { Link } from "gatsby"
import projectData from "../data/projects"
import styles from "../scss/_projects.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = () => {
  return (
    <Layout>
      <article className={styles.projects}>
        <SEO title="Projects" />
        <h1>Projects</h1>
        <section className={styles["project-grid"]}>
          {projectData.map(project => {
            return (
              <div key={project.slug} className={styles.project}>
                <Link to={`/project/${project.slug}`}>
                  <h2>{project.title}</h2>
                  {project.images && project.images.length ? (
                    <img
                      src={require(`../images/${project.images[0]}`)}
                      alt={project.title}
                    />
                  ) : (
                    ""
                  )}
                  <p>{project.description}</p>
                </Link>
              </div>
            )
          })}
        </section>
      </article>
    </Layout>
  )
}

export default projects
