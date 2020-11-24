import { useState, useEffect, useCallback } from 'react'
import { useSubscription, useQuery, useMutation } from '@apollo/client'

import { MESSAGES } from './graphql/queries'
import { MESSAGE_SENT } from './graphql/subscriptions'
import { MESSAGE } from './graphql/mutations'

const useMessages = () => {
  const [messages, setMessages] = useState([])

  const { loading: loadingMessages } = useQuery(MESSAGES, {
    variables: { room: '5fbc5514a06176003ad546d6' },
    onCompleted: ({ messages = [] }) => handleCompleteMessages(messages),
  })

  const {
    data: { messageSent } = {},
    loading: loadingMessageSent,
  } = useSubscription(MESSAGE_SENT, {
    variables: { room: '5fbc5514a06176003ad546d6' },
  })

  const [messageMutation] = useMutation(MESSAGE)

  useEffect(() => {
    if (messageSent) {
      setMessages([...messages, messageSent])
    }
  }, [messageSent])

  const handleCompleteMessages = (newMessages) => {
    if (newMessages) {
      setMessages([...newMessages])
    }
  }

  const loading = loadingMessages || loadingMessageSent

  const sendMessage = useCallback(
    ({ content, author = '5fbc54f5a06176003ad546d5' }) => {
      messageMutation({
        variables: {
          content,
          author,
        },
      })
    },
    []
  )

  return { messages, sendMessage, loading }
}

export default useMessages
