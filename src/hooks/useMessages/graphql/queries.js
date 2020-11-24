import { gql } from '@apollo/client'

const MESSAGES = gql`
  query messages($room: ID!) {
    messages(room: $room) {
      id
      content
      createdAt
      author {
        id
        name
      }
    }
  }
`

export { MESSAGES }
