import React from "react"
import { useStaticQuery } from "gatsby"
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {data.allFile.edges.map(({ node }, i) => (
          <div
            key={i}
            style={{
              width: "25%",
              margin: "auto",
              padding: "35px",
            }}
          >
            <Img fluid={node.childImageSharp.fluid} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnerLogos
