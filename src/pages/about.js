import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>
      Zachary Brewer has been creating high quality web products since 2010. He
      got his start by working on a number of high profile freelance projects
      for Pentagram Design.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
