import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      Zachary Brewer has been creating high quality, responsive web products
      since 2010. A musician by training, Zach takes great pleasure in the
      potential for creativity that exists within the well-defined mathematical
      form which code provides.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
