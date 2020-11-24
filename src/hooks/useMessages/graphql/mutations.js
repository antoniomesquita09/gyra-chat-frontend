import { gql } from '@apollo/client'

const MESSAGE = gql`
  mutation message($content: String!, $author: ID!) {
    message(content: $content, author: $author) {
      id
      content
      author {
        id
        name
      }
      room {
        id
        name
      }
    }
  }
`

export { MESSAGE }
