import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import zenanbachLogo from '../images/zenanbach_logo.svg'

const imgStyle = {
  width: `90px`,
  marginBottom: `0`
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      borderBottom: `1px solid #000`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      
        <Link
          to="/"
          style={{
            color: `#000`,
            textDecoration: `none`,
          }}
        >
          <img style={imgStyle} src={zenanbachLogo} />
        </Link>
      
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
