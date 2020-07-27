import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./home.module.scss"

const PartnerLogos = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "partnerLogos" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                base64
                aspectRatio
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <h2>Past Clients</h2>
      <div className={styles.partners}>
        {data.allFile.edges.map(({ node }, i) => (
          <div key={i} className={styles.partner}>
            <div className={styles.partnerInner}>
              <Img fluid={node.childImageSharp.fluid} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnerLogos
