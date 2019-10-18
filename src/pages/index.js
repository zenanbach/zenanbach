import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ textAlign: "center" }}>Zenanbach Creative</h1>
    <p style={{ textAlign: "center" }}>
      A boutique web development studio focused on arts, wellness,
      sustainability, and social good
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image src="sami-takarautio-JiqalEW6Ml0-unsplash.jpg" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
