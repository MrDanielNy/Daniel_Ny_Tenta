import styled from 'styled-components'

export const ContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(14, minmax(auto, auto));
    grid-template-rows: 6.8rem 20rem 3rem auto;
    gap: 0 1rem;
    background-color: ${props => props.theme.colors.dark1};

@media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 1rem repeat(12, minmax(auto, auto)) 1rem;
    grid-gap: 0 1rem;}
@media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: repeat(6, 1fr);
}


`
