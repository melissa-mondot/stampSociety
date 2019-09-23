import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <Img fixed={post.frontmatter.image.childImageSharp.fluid} />
      <p dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
