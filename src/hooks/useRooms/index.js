import { useQuery } from '@apollo/client'

import { ROOMS } from './graphql/queries'

const useRooms = () => {
  const { data: { rooms = [] } = {}, loading } = useQuery(ROOMS)

  return { rooms, loading }
}

export default useRooms
