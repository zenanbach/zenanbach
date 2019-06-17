import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Projects = ({ pageContext }) => (
  <Layout>
    <SEO title={pageContext.title} description={pageContext.description} />
    <div>
      <h1>{pageContext.title}</h1>
      {pageContext.images && pageContext.images.length ? (
        <img
          src={require(`../images/${pageContext.images[0]}`)}
          alt={pageContext.title}
        />
      ) : (
        ""
      )}
      <p>{pageContext.description}</p>
    </div>
  </Layout>
)

export default Projects
