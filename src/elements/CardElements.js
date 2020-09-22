import styled from "styled-components"

export const CardWrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.light1};
  max-width: 14rem;
`