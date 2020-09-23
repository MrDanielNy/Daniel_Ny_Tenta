import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { MenuIcon, NavWrapper, MenuLinks } from "../elements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "daniel_ny_avatar.png" }) {
        publicURL
      }
    }
  `)

  return (
    <NavWrapper>
      <div className="logo">
        <img src={data.logo.publicURL} alt="My Logo" />
      </div>
      <div className="menu">
        <MenuIcon>
          <div></div>
          <div></div>
          <div></div>
        </MenuIcon>
        <MenuLinks>
          Link!
        </MenuLinks>
        <ul>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

    </NavWrapper>
  )
}

/*
    return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="My Logo" />
      </Link>
      <Link to="/about">
        About
      </Link>
      <Link to="/contact">
        Contact
      </Link>
    </NavWrapper>
  )
*/