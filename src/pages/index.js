import React from "react"
import { graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faJs,
  faHtml5,
  faReact,
  faCss3Alt,
  faNode,
  faWordpress,
  faPhp,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import HomeHeroImage from "../components/HomeHeroImage"
import ZachHeadshotImage from "../components/ZachHeadshotImage"
import SEO from "../components/seo"
import HomeProjectGridItem from "../components/HomeProjectGridItem"
import PartnerLogos from "../components/PartnerLogos"

import styles from "../components/home.module.scss"

const IndexPage = ({ data }) => {
  const featuredProjects = data.allMarkdownRemark.edges.filter(
    proj => proj.node.frontmatter.featured
  )
  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.home}>
        <h1 className={styles.homeTitle}>Zenanbach Creative</h1>
        <p style={{ margin: "0.5em 0em 1.5em", fontSize: "1.2em" }}>
          A web and mobile app development studio focused on arts, wellness,
          sustainability, and social good.
        </p>
        <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
          <div className={styles.headShotWrapper}>
            <div className={styles.headshotContainer}>
              <ZachHeadshotImage />
            </div>
          </div>
          <div className={styles.homeImageWrapper}>
            <HomeHeroImage />
          </div>
        </div>
        <div className={styles.homeAbout}>
          <p>
            Zachary Brewer is a full-stack web developer with over 10 years of
            experience crafting high quality, responsive web products across a
            variety of industries.
          </p>
          <h2>Expertise</h2>
          <div className={styles.programming}>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon
                    className={styles.jsIcon}
                    icon={faJs}
                    size="1x"
                  />
                </span>
                JavaScript
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 630 630"
                    className="svg-inline--fa fa-js fa-w-14 fa-1x home-module--jsIcon--2s7lk"
                  >
                    {/* The MIT License (MIT)

            Copyright (c) 2015 Remo H. Jansen <remo.jansen@wolksoftware.com>

            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:

            The above copyright notice and this permission notice shall be included in
            all copies or substantial portions of the Software.

            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
            THE SOFTWARE. */}
                    <g
                      transform="translate(0.000000,630.000000) scale(0.100000,-0.100000)"
                      fill="#007ACC"
                      stroke="none"
                    >
                      <path
                        d="M0 3150 l0 -3150 3150 0 3150 0 0 3150 0 3150 -3150 0 -3150 0 0
            -3150z m5077 251 c160 -40 282 -111 394 -227 58 -62 144 -175 151 -202 2 -8
            -272 -192 -438 -295 -6 -4 -30 22 -57 62 -81 118 -166 169 -296 178 -191 13
            -314 -87 -313 -254 0 -49 7 -78 27 -118 42 -87 120 -139 365 -245 451 -194
            644 -322 764 -504 134 -203 164 -527 73 -768 -100 -262 -348 -440 -697 -499
            -108 -19 -364 -16 -480 5 -253 45 -493 170 -641 334 -58 64 -171 231 -164 243
            3 4 29 20 58 37 28 16 134 77 234 135 l181 105 38 -56 c53 -81 169 -192 239
            -229 201 -106 477 -91 613 31 58 53 82 108 82 189 0 73 -9 105 -47 160 -49 70
            -149 129 -433 252 -325 140 -465 227 -593 365 -74 80 -144 208 -173 315 -24
            89 -30 312 -11 402 67 314 304 533 646 598 111 21 369 13 478 -14z m-1479
            -263 l2 -258 -410 0 -410 0 0 -1165 0 -1165 -290 0 -290 0 0 1165 0 1165 -410
            0 -410 0 0 253 c0 140 3 257 7 260 3 4 502 6 1107 5 l1101 -3 3 -257z"
                      />
                    </g>
                  </svg>
                </span>
                TypeScript
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className={styles.reactIcon}
                    icon={faReact}
                    size="1x"
                    spin
                  />
                </span>
                React
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className={styles.reactIcon}
                    icon={faReact}
                    size="1x"
                    spin
                  />
                </span>
                React Native
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className={styles.nodeIcon}
                    icon={faNode}
                    size="1x"
                  />
                </span>
                NodeJs
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className={styles.htmlIcon}
                    icon={faHtml5}
                    size="1x"
                  />
                </span>
                HTML
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className={styles.cssIcon}
                    icon={faCss3Alt}
                    size="1x"
                  />
                </span>
                CSS
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className={styles.wordpressIcon}
                    icon={faPhp}
                    size="1x"
                  />
                </span>
                PHP
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className={styles.wordpressIcon}
                    icon={faWordpress}
                    size="1x"
                  />
                </span>
                Wordpress
              </li>
            </ul>
          </div>
        </div>
        <h2 className={styles["projects-header"]}>Featured Projects</h2>
        <div className={styles.recentProjects}>
          {featuredProjects.map(proj => (
            <HomeProjectGridItem key={proj.node.id} project={proj.node} />
          ))}
        </div>
        <PartnerLogos />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            url
            featured
            logo {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
