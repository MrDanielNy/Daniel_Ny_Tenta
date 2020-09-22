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
          Get in touch! Please...
        </H1>
      </Content>
    </Container>
  )
}

export default notFound

export const contactQuery = graphql`
  query ContactQuery {
    imageSharp(fixed: { originalName: { eq: "sad-cat.jpg" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`