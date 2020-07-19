import React from "react"
import styles from "./contact.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <SEO title="contact" />
      <div className={styles.contact}>
        <h1>Contact</h1>
        <a style={{ marginBottom: "20px" }} href="mailto:zenanbach@gmail.com">
          <p>Reach out to discuss your project.</p>
        </a>
      </div>
    </Layout>
  )
}

export default contact
