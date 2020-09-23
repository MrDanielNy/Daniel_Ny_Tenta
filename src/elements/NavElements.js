import styled from 'styled-components'

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
            margin-right: ${props=>props.theme.spacings.medium};
            font-size: ${props=>props.theme.spacings.medium};
            color: ${props=>props.theme.colors.light1};
            text-decoration: none;

            &:focus,
            &:hover {
                border-bottom: 1px solid white;
            }
        }
    }

@media ${props=>props.theme.breakpoints.mobile} {
    grid-column: 1 / span 6;

    .logo {
        img {
            height: 80px;
            margin-left: 20px;
        }
    } 
}
`