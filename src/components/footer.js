import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FooterElement, FooterSocialWrapper, FooterSocialIcons, P } from '../elements';

export const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            twitter: file(relativePath: { eq: "twitter.svg" }) {
                publicURL
            }
            facebook: file(relativePath: { eq: "facebook.svg" }) {
                publicURL
            }
            instagram: file(relativePath: { eq: "instagram.svg" }) {
                publicURL
            }
            linkedin: file(relativePath: { eq: "linkedin.svg" }) {
                publicURL
            }
        }
    `)

    return (
        <FooterElement>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={data.twitter.publicURL} alt="Twitter" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={data.facebook.publicURL} alt="Facebook" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={data.instagram.publicURL} alt="Instagram" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={data.linkedin.publicURL} alt="LinkedIn" />
                    </a>
                </FooterSocialIcons>
                <P size="xSmall" color="dark3">Copyright Daniel Ny 2020</P>
            </FooterSocialWrapper>
        </FooterElement>
    )
}