import React from "react"

export default ({ data }) => (
  <div style={{ color: 'tomato' }}>
    <h1>Hello word</h1>
    <p>This is a paragraph</p>
    <h2>{data.site.siteMetadata.title}</h2>
    <h2>{data.site.siteMetadata.author}</h2>
  </div>
)

export const query = graphql`
  query FirstQuery {
  allFile {
    edges {
      node {
        relativePath
        extension
        prettySize
      }
    }
  }
}

`