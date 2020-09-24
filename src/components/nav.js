import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../elements"
import { useAvatarImage } from '../hooks/useAvatarImage'

export const Nav = () => {
  //Using a hook to access (logo) avatar image
  const data = useAvatarImage();

  return (
    <NavWrapper>
     { 
      <div className="logo">
        <img src={ data.brand.publicURL } alt="My Logo" />
      </div>}
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger"><div></div></div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
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
          </div>
        </div>
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