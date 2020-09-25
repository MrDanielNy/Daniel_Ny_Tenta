import React from "react"
import { Link } from "gatsby"
import { NavWrapper } from "../elements"
import { useAvatarImage } from '../hooks/useAvatarImage'

export const Nav = () => {
  //Using a hook to access (logo) avatar image
  const data = useAvatarImage();

  return (
    <NavWrapper>
      <div className="logo">
        <img src={data.brand.publicURL} alt="Daniel Ny" />
      </div>
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