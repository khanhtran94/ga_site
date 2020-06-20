import React from "react"

export default ({ data }) => (
  <div style={{ color: 'tomato' }}>


    {data.allMarkdownRemark.edges.map(({ node }) =>
      <div>
        <h1>{node.frontmatter.title}</h1>
        <h2>{node.frontmatter.author}</h2>
        <br></br>
        {node.rawMarkdownBody}
      </div>

    )}
  </div>
)

export const query = graphql`
  query FirstQuery{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          author
        }
        rawMarkdownBody
      }
    }
  }
}



`