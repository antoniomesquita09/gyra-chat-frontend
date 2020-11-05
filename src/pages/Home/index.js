import React from 'react'
import { useMutation, useQuery } from '@apollo/client'

import { ROOMS } from './graphql/queries'
import { USER } from './graphql/mutations'

import Wrapper from 'components/Wrapper'
import Sidebar from 'components/Sidebar'

import styles from './index.module.scss'

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
    <Wrapper>
      <div className={styles.root}>
        <Sidebar />
        <button className={styles.button} onClick={handleCreateUser}>
          Create User
        </button>
        <ul>
          {rooms && rooms.map((room) => <li key={room.id}>{room.name}</li>)}
        </ul>
      </div>
    </Wrapper>
  )
}

export default Home
