import React from "react"
import {  Container, FeatureImage, Content, ContentCard } from '../components'

const index = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
      <ContentCard date="2020-09-16" title="En titel" excerpt="Lite text i excerpt"  slug="/en-adress/" />

      </Content>
  </Container>
  )
}

export default index
