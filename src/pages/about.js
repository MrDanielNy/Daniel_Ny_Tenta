import React from "react"
import { graphql } from "gatsby"
import { Container, Content, FeatureImage } from "../components"
import { H1 } from "../elements"

const notFound = ({ data }) => {
  const featureImage = data.imageSharp.fixed

  return (
    <Container>
      <FeatureImage fixed={featureImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          This should be my about page, but it's just a cat.
        </H1>
      </Content>
    </Container>
  )
}

export default notFound

export const aboutQuery = graphql`
  query AboutQuery {
    imageSharp(fixed: { originalName: { eq: "sad-cat.jpg" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`