import styled from 'styled-components'

export const MenuIcon = styled.button`
    display: none; /* Dont show unless on mobile */

    @media ${props => props.theme.breakpoints.mobile} {
        position: absolute;
        top: 2rem;
        right: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 1.8rem;
        height: 1.5rem;
        border: none;
        z-index: 50;
        background: transparent;

        div {
            width: 1.5rem;
            height: .2rem;
            background: white;
            border-radius: 5px;
            transform-origin: 1px;
        }   
    } 
`;

export const MenuLinks = styled.div`
    display: none;
@media ${props => props.theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100%;
    font-size: 3rem;
    background-color: lightgrey;
    color: white;
    z-index: 100;
}
`;

export const NavWrapper = styled.div`
    width: 100%; 
    display: flex;
    grid-column: 2 / span 12;
    grid-row: 1 / 1;

    .logo {
        img {
            height: 80px;
            margin-top: 10px;
        }
    } 

    .menu {
        display: flex;
        width: 100%;
    }

    ul {
        display: flex;
        width: 100%;
        list-style: none;
        flex-flow: row nowrap;
        align-items: center; 
        justify-content: flex-end;

        a {
            margin-right: ${props => props.theme.spacings.medium};
            font-size: ${props => props.theme.spacings.medium};
            color: ${props => props.theme.colors.light1};
            text-decoration: none;

            &:focus,
            &:hover {
                border-bottom: 1px solid white;
            }
        }
    }


@media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 6;

    .logo {
        img {
            height: 80px;
            margin-left: 20px;
        }
    } 

    ul {
        display: none;
    }
 
}
`