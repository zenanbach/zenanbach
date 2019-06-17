import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import imageSrc from "../images/kitty.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Zenanbach Creative</h1>
    <p>
      A boutique web development studio focused on arts, wellness,
      sustainability, and social good
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image imageSrc={imageSrc} />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
