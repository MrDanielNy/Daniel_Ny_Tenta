import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 4 / 11; /* 4 / span 8 */
  grid-row: 3 / span 5;
  background-color: ${props => props.theme.colors.light2};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
    padding: unset;
    justify-content: center;
    align-items: center;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / 8;
    grid-gap: 0;
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  }
`