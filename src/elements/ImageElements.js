import styled from 'styled-components'

export const FeatureImageWrapper = styled.div`
    grid-column: 3 / span 10;
    grid-row: 2 / 4;
    position: relative;
    overflow: hidden;


    @media ${props=>props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`