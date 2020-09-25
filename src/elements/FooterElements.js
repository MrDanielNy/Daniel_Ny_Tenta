import styled from 'styled-components'

export const FooterElement = styled.footer`
    grid-column: 2 / span 12;
    display: flex;
    min-height: 11.25rem;
    padding: 3rem 0;
    align-items: flex-start;
    justify-content: center;

    @media ${props=>props.theme.breakpoints.mobile} {
        grid-column: 1 / span 6;
    }
`

export const FooterSocialWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    p {
        text-align: center;
        flex: 0 0 100%
    }
`

export const FooterSocialIcons = styled.div`
    flex: 0 0 100%;
    margin-bottom: 2rem;

    img {
        height: 22px;
        padding: 0 1rem;
        transition: filter 0.3s ease;
    }

    img:hover,
    img:focus {
        filter: brightness()(50%);
    }
`