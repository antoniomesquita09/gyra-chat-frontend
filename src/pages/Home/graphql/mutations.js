import { gql } from '@apollo/client'

const USER = gql`
  mutation user($name: String!) {
    user(name: $name) {
      id
      name
    }
  }
`

const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $name: String, $room: String) {
    updateUser(id: $id, name: $name, room: $room) {
      id
      name
      room {
        id
        name
      }
    }
  }
`

export { USER, UPDATE_USER }
