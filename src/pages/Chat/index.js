import React from 'react'
import { useForm } from 'react-hook-form'
import { formatDistanceToNow } from 'date-fns'
import ptLocale from 'date-fns/locale/pt-BR'
// import { useParams } from 'react-router-dom'

import Wrapper from 'components/Wrapper'

import { useMessages } from 'hooks'

import styles from './index.module.scss'

const Chat = () => {
  // const { roomId } = useParams()
  const { register, handleSubmit, reset } = useForm()
  const { messages, sendMessage } = useMessages()

  // <p key={message.id}>{message?.content}</p>

  const onSubmit = ({ text }) => {
    if (text) {
      sendMessage({ content: text })
      reset()
    }
  }

  return (
    <Wrapper>
      <h1>Chat</h1>
      <div className={styles.content}>
        <div className={styles.messages}>
          {messages &&
            messages.map((message) => (
              <div key={message.id} className={styles.message}>
                <p>{message?.content}</p>
                <span className={styles.date}>
                  {message.createdAt &&
                    formatDistanceToNow(new Date(message.createdAt), {
                      locale: ptLocale,
                    })}
                </span>
              </div>
            ))}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name='text' type='text' ref={register} autoComplete='off' />
          <input type='submit' name='Send' />
        </form>
      </div>
    </Wrapper>
  )
}

export default Chat
