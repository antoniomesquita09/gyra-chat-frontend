import { gql } from '@apollo/client'

const MESSAGE_SENT = gql`
  subscription messageSent($room: ID!) {
    messageSent(room: $room) {
      id
      content
      createdAt
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

export { MESSAGE_SENT }
