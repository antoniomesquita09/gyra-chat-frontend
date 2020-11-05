import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ApolloProvider } from '@apollo/client'

import client from 'services/apollo'

import Routes from './App.routes'

const App = () => (
  <ApolloProvider client={client}>
    <ToastContainer />
    <Routes />
  </ApolloProvider>
)

export default App
