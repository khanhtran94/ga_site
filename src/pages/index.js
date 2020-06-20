import React from "react"

export default ({ data }) => (
  <div style={{ color: 'tomato' }}>
    <table>
      <thead>
        <tr>
          <th>relativePath</th>
          <th>extension</th>
          <th>prettySize</th>
        </tr>
      </thead>
      <tbody>
        {data.allMarkdownRemark.edges.map(({ node }) =>
          <tr>
            <td>{node.relativePath}</td>
            <td>{node.extension}</td>
            <td>{node.prettySize}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)

export const query = graphql`
  query FirstQuery{
  allMarkdownRemark {
    edges {
      node {
        id
        html
        frontmatter {
          title
          author
        }
      }
    }
  }
}


`