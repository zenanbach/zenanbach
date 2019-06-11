import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import zenanbachLogo from "../images/zenanbach_logo.svg"
import styles from "./header.module.scss"

const Header = ({ menuLinks, siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <Link to="/">
        <img
          className={styles.headImg}
          alt="Zenanbach Creative Studio"
          src={zenanbachLogo}
        />
      </Link>
      <nav className={styles.headerNav}>
        <ul>
          {menuLinks.map(link => {
            return (
              <li>
                <Link to={link.link}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
