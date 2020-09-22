import styled from 'styled-components'
import { Link } from 'gatsby'

export const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    grid-column: 2 / span 12;
    grid-row: 1 / 1;


img {
    height: 80px;
    margin-top: 10px;
}

a {
    color: ${props=>props.theme.colors.light1};
    text-decoration: none;
    font-size: ${props=>props.theme.spacings.medium};
    margin-right: 2rem;
}

a:hover {
    border-bottom: 1px solid white;
}

a:last-of-type {
    margin-right: 0px;
}

@media ${props=>props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
}
`