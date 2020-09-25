import { useStaticQuery, graphql } from 'gatsby'

export const useFooterImages = () => {
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

    return data;
}