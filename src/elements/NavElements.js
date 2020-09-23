import styled from 'styled-components'

export const NavWrapper = styled.nav`
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

    .menu-wrap {
        position: fixed;
        top: 0;
        right: 10px;
        z-index: 100;
        color: white;
        font-size: 3rem;
        width: 100%;
    }

    .menu {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: flex-end;
        align-items: center;
    }

    .toggler {
        display: none;
    }


@media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 6;

    .toggler {
        display: unset;
    }

    .menu {
        display: flex;
        width: 100%;
    }

    .menu-wrap {
        position: absolute;
        top: 0;
        right: 0px;
        z-index: 100;
        color: white;
        font-size: 3rem;
    }

    .menu-wrap .toggler {
        position: absolute;
        top: 0;
        right: 10px;
        z-index: 101;
        cursor: pointer;
        width: 50px;
        height: 50px;
        opacity: 0;
    }

    .menu-wrap .hamburger {
        position: absolute;
        top: 0;
        right: 10px;
        z-index: 99;
        width: 60px;
        height: 60px;
        padding: 1rem;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu-wrap .hamburger > div {
        position: relative;
        width: 100%;
        height: 2px;
        background-color: ${props=>props.theme.colors.light1};
        transition: all 0.4s ease;
    }

    /* Style for the top and bottom lines*/
    .menu-wrap .hamburger > div:before,
    .menu-wrap .hamburger > div:after {
        content: '';
        position: absolute;
        top: -10px;
        width: 100%;
        height: 2px;
        background-color: inherit;
    }

    /* Moves line down (To make it three lines) */
    .menu-wrap .hamburger > div:after {
        top: 10px;
    }

    /* Toggler animate*/
    .menu-wrap .toggler:checked + .hamburger > div {
        transform: rotate(135deg);
    }

    /* Turn lines into X */
    .menu-wrap .toggler:checked + .hamburger > div:before, 
    .menu-wrap .toggler:checked + .hamburger > div:after {
        top: 0;
        transform: rotate(90deg);

    }

    /* Rotate on hover when checked */
    .menu-wrap .toggler:checked:hover + .hamburger > div {
        transform: rotate(225deg);
    }

    /* Show Menu */
    .menu-wrap .toggler:checked ~ .menu {
        visibility: visible;
    }

    .menu-wrap .toggler:checked ~ .menu > div {
        transform: scale(1);
        transition-duration: 1s;
    }

    .menu-wrap .toggler:checked ~ .menu > div > div {
        opacity: 1;
        transition: opacity 0.4s ease;
    }

    .menu-wrap .menu {
        position: fixed;
        top: 0%;
        right: 0px;
        width: 100%;
        height: 100%;
        visibility: hidden;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu-wrap .menu > div {
        background-color: ${props=>props.theme.colors.dark2};
        opacity: 90%;
        border-radius: 50%;
        width: 200vw;
        height: 200vh;
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        transition: all 0.4s ease;
    }

    .menu-wrap .menu > div > div {
        text-align: center;
        max-width: 90vw;
        max-height: 100vh;
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    .menu-wrap .menu > div > div > ul > li {
        text-align: center;
        max-width: 90vw;
        max-height: 100vh;
        opacity: 1;
        transition: opacity 0.4s ease;
    }

    .menu-wrap .menu > div > div > ul > li > a {
        transition: color 0.4s ease;
    }

    .logo {
        img {
            height: 80px;
            margin-left: 20px;
        }
    } 

    ul {
        display: flex;
        flex-direction: column;
        z-index: 203;
        justify-content: center;
        align-items: center;
    }
 
}
`