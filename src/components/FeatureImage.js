import React from 'react'
import { useStaticQuery } from "gatsby"

import {graphql} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FeatureImageWrapper } from "../elements";

export const FeatureImage = ({ fixed, children }) => {
    const data = useStaticQuery(graphql`
        query {
            imageSharp(fixed: {originalName:{ eq: "markus-spiske-code.jpg"}}) {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    `)

    return (
        <FeatureImageWrapper>
            <BackgroundImage fixed = {fixed ? fixed : data.imageSharp.fixed}
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
            }}
            >
                {children}
            </BackgroundImage>
        </FeatureImageWrapper>
    )
}