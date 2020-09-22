import Styled from 'styled-components'

export const PostsWrapper = Styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 5%;

    @media ${props => props.theme.breakpoints.mobile} {
    display: unset;
    align-items: center;
    justify-content: center;
}   
`