import { gql } from '@apollo/client'

const ROOMS = gql`
  query rooms {
    rooms {
      id
      name
    }
  }
`

export { ROOMS }
