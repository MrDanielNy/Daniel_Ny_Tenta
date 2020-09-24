import { useStaticQuery, graphql } from 'gatsby'

export const useAvatarImage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                brand: file(relativePath: { eq: "daniel_ny_avatar.png" }) {
                    publicURL
                }
            }
        `
    )

    return data;
}