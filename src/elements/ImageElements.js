import styled from 'styled-components'

export const FeatureImageWrapper = styled.div`
    grid-column: 2 / span 12; /* 3 / 10*/
    grid-row: 2 / 4;
    position: relative;
    overflow: hidden;
    color: white;
    font-size: 2rem;

    h1 {
        padding-top: 5%;
        padding-left: 5%;
    }

    p {
        padding-left: 5%;
    }

    @media ${props=>props.theme.breakpoints.tablet} {
        grid-column: 2 / 14;
    }

    @media ${props=>props.theme.breakpoints.mobile} {
        grid-column: 1 / 8;

        p {
            font-size: 1.8rem;
        }
    }
`