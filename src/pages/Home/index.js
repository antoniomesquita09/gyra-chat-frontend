import React from 'react'
import { useMutation, useQuery } from '@apollo/client'

import { ROOMS } from './graphql/queries'
import { USER } from './graphql/mutations'

const Home = () => {
  const { data: { rooms = [] } = {} } = useQuery(ROOMS)
  const [createUser] = useMutation(USER)

  const handleCreateUser = async () => {
    await createUser({
      variables: {
        name: 'Tonin',
      },
    })
  }

  return (
    <div>
      <button onClick={handleCreateUser}>Create User</button>
      <ul>
        {rooms && rooms.map((room) => <li key={room.id}>{room.name}</li>)}
      </ul>
    </div>
  )
}

export default Home
